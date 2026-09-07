import express from 'express'
import { addStudentController, deleteStudentByIdController, getStudentByIdController, getStudents, patchStudentController, putStudentController } from '../controllers/studentsController.js'

const router=express.Router()

router.get("/students",getStudents)
router.post("/students",addStudentController)
router.get("/students/:id",getStudentByIdController)
router.put("/students/:id",putStudentController)
router.patch("/students/:id",patchStudentController)
router.delete("/students/:id",deleteStudentByIdController)
export default router
