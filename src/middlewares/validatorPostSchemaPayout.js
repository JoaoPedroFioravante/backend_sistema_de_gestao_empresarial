import payoutSchemaPost from '../utils/payoutSchemaPost.js'
import z from 'zod'
import personalizedError from '../errors/PersonalizedError.js';

const validatorPostSchemaPayout = (req, res, next)=>{
    const isValidObject = payoutSchemaPost.safeParse(req.body);
    if(!isValidObject.success){
        throw new personalizedError(400, "json enviado invalido", z.flattenError(isValidObject.error).fieldErrors);
    }
    next();
}

export default validatorPostSchemaPayout;