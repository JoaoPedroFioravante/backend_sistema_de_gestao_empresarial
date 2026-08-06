export default function errorTreatment(err, req, res, next){
    res.status(err.code??500)
    .json({message:err.message??"erro interno do servidor"});
}