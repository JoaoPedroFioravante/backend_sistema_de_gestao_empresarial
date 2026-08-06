import z from 'zod';
import clientSchema from "../utils/clientSchemaPost.js";

const validatorPostSchema = (req, res, next)=> {
    const isValidObject = clientSchema.safeParse(req.body);
    if(!isValidObject.success){
        return res.status(400).json({message: z.flattenError(isValidObject.error)});
    };
    next();
}

export default validatorPostSchema;