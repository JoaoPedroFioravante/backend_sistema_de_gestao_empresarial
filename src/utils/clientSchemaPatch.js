import z, { int, string } from 'zod'
const clientSchema = z.object({
    name: z.string().min(3, "o tamanho minimo do nome é 3 caracteres").max(20, "o tamanho maximo do nome é 20 caracteres").optional(),
    lastName: z.string().min(3,  "o tamanho minimo do nome é 3 caracteres").max(20,  "o tamanho maximo do nome é 20 caracteres").optional(),
    contactNumbers: z.array(z.string("os elementos do campo telefone devem ser do tipo texto").length(12, "o telefone deve conter 12 digitos, 11 numeros e o traço separador")).min(1, "deve conter pelo menos 1 numero valido").optional()
}).refine((data)=>{
    let isValidContactNumbers =  true;
    data.contactNumbers.forEach((number)=>{
        for(let i = 0; i<12; i++){
            if(i==2 && number.at(i)!='-') 
            {
                isValidContactNumbers = false; 
                break;
            }
            else if(i!= 2 && isNaN(number.at(i)) )
            { 
                isValidContactNumbers = false; 
                break;
            }
        }
    })
    return isValidContactNumbers;
}, {error: "numeros fornecidos devem conter apenas numeros e o traço separador exemplo: 02-991234567", 
    path: ["contactNumbers"]
});


export default clientSchema;
