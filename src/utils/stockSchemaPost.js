import z from "zod";
import validDate from "./validateDate";

const StockSchemaPost = z.object({
    nome: z.string().min(3, "nome do produto não pode ser menor que 3 caracteres").max(50, "nome do produto não pode ser maior que 50 caracteres"),
    valor: z.number("valor do produto deve ser um numero"),
    data_entrada: validDate,
    quantidade : z.number("quantidade deve ser um numero")
})

export default StockSchemaPost;