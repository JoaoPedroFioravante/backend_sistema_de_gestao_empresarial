import z from 'zod'
import validDate from './validateDate.js';

const payoutSchemaPost = z.object({
    valor: z.number("o valor deve ser um numero"),
    data: validDate,
    tipo:z.enum([
        "PIX",
        "CARTAO",
        "DINHEIRO"
    ]),
    id_ordem_servico: z.number("o id da ordem de serviço deve ser um numero")
});
 
export default payoutSchemaPost;