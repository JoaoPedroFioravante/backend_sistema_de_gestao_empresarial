export default function errorTreatment(err, req, res, next){
    res.status(err.status??500)
    .json({message:err.message??"erro interno do servidor"});
}