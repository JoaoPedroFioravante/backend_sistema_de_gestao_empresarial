import z from "zod";
import clientSchema from "../utils/clientSchemaPatch.js";
import personalizedError from "../errors/PersonalizedError.js";

const validatorPatchSchemaClient = (req, res, next)=>{
    const isValidObject = clientSchema.safeParse(req.body);
    
    if(!isValidObject.success){
        throw new personalizedError(400, "json recebido invalido", z.flattenError(isValidObject.error).fieldErrors)
    }
   next();
}

export default validatorPatchSchemaClient;