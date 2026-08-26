import z from 'zod'

const payoutSchemaPost = z.object({
    valor: z.number("o valor deve ser um numero"),
    data: z.date("a data deve representar uma data no tipo dd/mm/yyyy "),
    tipo:z.enum([
        "PIX",
        "CARTAO",
        "DINHEIRO"
    ]),
    id_ordem_servico: z.number("o id da ordem de serviço deve ser um numero")
});
 
export default payoutSchemaPost;