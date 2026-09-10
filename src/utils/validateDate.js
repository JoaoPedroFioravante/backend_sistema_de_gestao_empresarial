import z from "zod";

const validDate = z
  .string()
  .length(10, {
    error: "A data deve ter 10 caracteres"
  })
  .regex(
    /^\d{2}\/\d{2}\/\d{4}$/,
    {
      error: "Formato deve ser DD/MM/YYYY"
    }
  ).refine((data)=>{
    const ano = data.split("/").map(Number)[2];
    let today = new Date();
    if(Number(ano) > today.getFullYear()) return false;
    return true;
  },
{error: "ano não pode ser maior que "+ new Date().getFullYear()})
  .refine((data) => {
    const [dia, mes, ano] = data.split("/").map(Number);
    
    const date = new Date(ano, mes - 1, dia);

    return (
      date.getDate() === dia &&
      date.getMonth() === mes - 1 &&
      date.getFullYear() === ano
    );
  }, {
    error: "Data inválida"
  });

export default validDate;