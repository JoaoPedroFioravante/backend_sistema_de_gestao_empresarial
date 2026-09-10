import z from "zod";
import validDate from "./validateDate";

const StockSchemaPatch = z.object({
    quantidade : z.number("quantidade deve ser um numero").optional()
})

export default StockSchemaPatch;