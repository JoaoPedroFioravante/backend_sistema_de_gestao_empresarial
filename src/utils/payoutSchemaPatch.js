import z from 'zod'



const payoutSchemaPatch = z.object({
    valor: z.number("o valor deve ser um numero").optional(),
    tipo:z.enum([
        "PIX",
        "CARTAO",
        "DINHEIRO"
    ]).optional()
});
 
export default payoutSchemaPatch;