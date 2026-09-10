import z from "zod";
import stockSchemaPatch from "../utils/stockSchemaPatch.js"
import personalizedError from "../errors/PersonalizedError.js";

const validatorPatchSchemaStock = (req, res, next)=>{
    const isValidObject = stockSchemaPatch.safeParse(req.body);
    if(!isValidObject.success){
        throw new personalizedError(
            400, 
            "json enviado invalido", 
            z.flattenError(isValidObject.error).fieldErrors
        )
    }
    next();
};
export default validatorPatchSchemaStock;