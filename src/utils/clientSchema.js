import z from 'zod'

const clientSchema = z.object({
    name: z.string().min(3, "o tamanho minimo do nome é 3 caracteres").max(20, "o tamanho maximo do nome é 20 caracteres"),
    lastName: z.string().min(3,  "o tamanho minimo do nome é 3 caracteres").max(20,  "o tamanho maximo do nome é 20 caracteres"),
    cpf : z.string().length(11, "o cpf deve ter 11 caracteres exatamente"),
    email: z.email("email invalido"),
    password: z.string().min(8, "tamanho minimo da senha é 8 caracteres").max(20, "tamanho maximo da senha é 20 caracteres"),
    confirmPassword: z.string().min(8).max(20),
});

export default clientSchema;