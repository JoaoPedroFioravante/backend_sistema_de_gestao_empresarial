import z from "zod";
import clientSchema from "../utils/clientSchemaPatch.js";

const validatorPatchSchemaClient = (req, res, next)=>{
    const isValidObject = clientSchema.safeParse(req.body);
    if(!isValidObject.success){
        return res.status(400).json({message: "objeto enviado está invalido", errors:z.flattenError(isValidObject.error)});
    }
   next();
}

export default validatorPatchSchemaClient;