import z from "zod";

const serviceOrderSchemaPatch = z.object({
  data_inicio: z.coerce
    .date("a entrada da data inicio está inválida o tipo esperado é data")
    .optional(),
  data_fim: z.coerce
    .date("a entrada da data fim está inválida o tipo esperado é data")
    .optional(),
  valor_total: z
    .number("o valor total deve ser numero")
    .min(1, "valor minimo tem que ser 1")
    .optional(),
  descricao: z
    .string("a descrição deve ser do tipo string")
    .min(1, "a descrição deve ter no minimo 1 caracter")
    .max(500, "a descrição deve ter no maximo 500 caracteres")
    .optional(),
  rua: z
    .string("a rua deve ser do tipo string")
    .min(1, "a rua deve ter no minimo 1 caracter")
    .max(50, "a rua deve ter no maximo 50 caracteres")
    .optional(),
  numero: z
    .number("o numero deve ser do tipo numero")
    .min(1, "numero deve ser no minimo 1")
    .max(10000, "numero da rua deve ser no maximo 10000")
    .optional(),
});

export default serviceOrderSchemaPatch;
