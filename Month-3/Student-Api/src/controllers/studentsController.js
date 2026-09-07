import { addStudent, readStudents, getStudentById, updateStudentById, replaceStudentById, deletStudentById } from "../models/studentModel.js"
import { AppError } from "../utills/AppError.js"
import logger from "../utills/logger.js"

const validateStudent = (student) => {
    return student && student.name !== undefined && student.email !== undefined && student.semester !== undefined && student.department !== undefined
}


export const getStudents=async(req,res,next)=>{
    try {
        const students=await readStudents()
        if(!students){
            const error=new AppError("Failed to get Students",500)
            logger.error(`Failed to fetch students on ${req.originalUrl}`)
            return next(error)
        }
        res.status(200).json({
            success:true,
            message:"Students Fetched Successfully",
            statusCode:200,
            data:students
        })
    } catch (error) {
        next(error)
    }
}

export const addStudentController=async(req,res,next)=>{
    try {
        const student=req.body
        if(!validateStudent(student)){
            return next(new AppError("Name, email, semester and department are required",400))
        }
        await addStudent(student)
        res.status(201).json({
            success:true,
            message:"Student Added Successfully",
            statusCode:201,
            data:student
        })
    } catch (error) {
        next(error)
    }
}

export const getStudentByIdController=async(req,res,next)=>{
    try {
        const id=req.params.id
        const student=await getStudentById(id)
        if(!student){
            const error=new AppError("Student Not Found",404)
            logger.warn(`Student with ID:${req.params.id} not found`)
            return next(error)
        }  
        res.status(200).json({
            success:true,
            message:"Student Fetched Successfully",
            statusCode:200,
            data:student
        })
    } catch (error) {
        logger.error(`Failed to fetch student with ID:${req.params.id}`)
        next(error)
    }
}

export const putStudentController=async(req,res,next)=>{
    try {
        const student=req.body
        if(!validateStudent(student)){
            return next(new AppError("Name, email, semester and department are required",400))
        }
        const updatedStudent=await replaceStudentById(req.params.id,student)
        if(!updatedStudent){
            return next(new AppError("Student Not Found",404))
        }
        res.status(200).json({
            success:true,
            message:"Student Updated Successfully",
            statusCode:200,
            data:updatedStudent
        })
    } catch (error) {
        next(error)
    }
}

export const patchStudentController=async(req,res,next)=>{
    try {
        const existingStudent=await getStudentById(req.params.id)
        if(!existingStudent){
            return next(new AppError("Student Not Found",404))
        }

        const student=req.body
        if(!student || Object.keys(student).length===0){
            return next(new AppError("At least one student field is required",400))
        }

        const updatedStudent=await updateStudentById(req.params.id,student)
        res.status(200).json({
            success:true,
            message:"Student Updated Successfully",
            statusCode:200,
            data:updatedStudent
        })
    } catch (error) {
        next(error)
    }
}


export const deleteStudentByIdController=async(req,res,next)=>{
    try {
        const id=req.params.id
        const deletedStudents=await deletStudentById(id)
        if(!deletedStudents){
            const error=new AppError("Student Not Found",404)
            logger.warn(`Student with ID:${req.params.id} not found`)
            return next(error)
        }
        logger.info(`Student with ID:${req.params.id} deleted successfully`)
        res.status(204).send()
    } catch (error) {
        logger.error(`Failed to delete student with ID:${req.params.id}`)
        next(error)
    }  
}
