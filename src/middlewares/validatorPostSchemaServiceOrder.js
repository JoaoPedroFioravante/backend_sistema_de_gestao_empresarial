import z from "zod";
import servicerOrderSchemaPost from "../utils/serviceOrderSchemaPost.js";
import personalizedError from "../errors/PersonalizedError.js";

const validatorPostSchemaServiceOrder = (req, res, next) => {
  const isValidObject = servicerOrderSchemaPost.safeParse(req.body);

  if (!isValidObject.success) {
    throw new personalizedError(
      400,
      "json recebido invalido",
      z.flattenError(isValidObject.error).fieldErrors,
    );
  }
  next();
};
export default validatorPostSchemaServiceOrder;
