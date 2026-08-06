import z, { int } from 'zod'

const clientSchema = z.object({
    name: z.string().min(3, "o tamanho minimo do nome é 3 caracteres").max(20, "o tamanho maximo do nome é 20 caracteres").optional(),
    lastName: z.string().min(3,  "o tamanho minimo do nome é 3 caracteres").max(20,  "o tamanho maximo do nome é 20 caracteres").optional(),
    contactNumbers: z.array(int).min(1).optional()
});

export default clientSchema;