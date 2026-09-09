import payoutSchemaPatch from "../utils/payoutSchemaPatch.js";
import z from 'zod'
import personalizedError from "../errors/PersonalizedError.js";

const validatorPatchSchemaPayout = (req, res, next)=>{
    const isValidObject = payoutSchemaPatch.safeParse(req.body);
    if(!isValidObject.success){
        throw new personalizedError(400, "json enviado invalido", z.flattenError(isValidObject.error).fieldErrors);
    }
    next();
}

export default validatorPatchSchemaPayout;