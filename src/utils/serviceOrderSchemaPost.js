import z from "zod";
import validDate from "./validateDate.js";

const serviceOrderSchema = z.object({
  data_inicio: validDate,
  valor_total: z
    .number("o valor total deve ser numero")
    .min(1, "valor minimo tem que ser 1"),
  descricao: z
    .string("a descrição deve ser do tipo string")
    .min(1, "a descrição deve ter no minimo 1 caracter")
    .max(500, "a descrição deve ter no maximo 500 caracteres"),
  rua: z
    .string("a rua deve ser do tipo string")
    .min(1, "a rua deve ter no minimo 1 caracter")
    .max(50, "a rua deve ter no maximo 50 caracteres"),
  numero: z
    .number("o numero deve ser do tipo numero")
    .min(1, "numero deve ser no minimo 1")
    .max(10000, "numero da rua deve ser no maximo 10000"),
});

export default serviceOrderSchema;
