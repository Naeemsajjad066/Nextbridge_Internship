import logger from "../utills/logger.js"

export const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode||500
    logger.error(`${req.method} ${req.originalUrl} failed with ${statusCode}:${err.message}`)
    res.status(statusCode).json({
        success:false,
        message:err.message || "Internal Server issue",
        statusCode
    })
}