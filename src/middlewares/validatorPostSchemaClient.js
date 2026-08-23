import z from 'zod';
import clientSchema from "../utils/clientSchemaPost.js";
import PersonalizedError from "../errors/PersonalizedError.js"

const validatorPostSchema = (req, res, next)=> {
    const isValidObject = clientSchema.safeParse(req.body);
    if(!isValidObject.success){
        const errors = z.flattenError(isValidObject.error).fieldErrors;
        //erro com mais de uma resposta
        throw new PersonalizedError(400, "json enviado invalido", errors);
    };
    next();
}

export default validatorPostSchema;