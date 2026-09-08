import logger from "../utils/logger.js"

export const validate=(schema,source)=>{
    return (req,res,next)=>{
        const result=schema.safeParse(req[source])
        if(!result.success){
            logger.warn(`Product validation failed`)
            let errors={}

            result.error.issues.forEach(issue => {
                errors[issue.path[0]]=issue.message
            });
            return res.status(400).json({
                message:"Product validation failed",
                errors
            })
        }
        if (!req.validated) req.validated = {}
        req.validated[source] = result.data
        next()
    }
}