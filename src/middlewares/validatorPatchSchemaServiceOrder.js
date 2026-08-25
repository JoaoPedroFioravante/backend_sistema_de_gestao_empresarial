import z from "zod";
import serviceOrderSchema from "../utils/serviceOrderSchemaPatch.js";
import personalizedError from "../errors/PersonalizedError.js";

const validatorPatchSchemaClient = (res, req, next) => {
  const isValidObject = serviceOrderSchema.safeParse(res.body);

  if (!isValidObject.success) {
    throw new personalizedError(
      400,
      "json recebido inválido",
      z.flattenError(isValidObject.error).fieldErrors,
    );
  }
  next();
};
export default validatorPatchSchemaClient;
