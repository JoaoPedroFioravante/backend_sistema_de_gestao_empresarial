import z from "zod";
import stockSchemaPost from "../utils/stockSchemaPost.js"
import personalizedError from "../errors/PersonalizedError.js";

const validatorPostSchemaStock = (req, res, next)=>{
    const isValidObject = stockSchemaPost.safeParse(req.body);

    if(!isValidObject.success){
        throw new personalizedError(
            400,
            "json recebido invalido",
            z.flattenError(isValidObject.error).fieldErrors
        )
    }
    next();
}
export default validatorPostSchemaStock;