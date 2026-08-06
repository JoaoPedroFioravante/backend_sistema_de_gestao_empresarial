export default class ClientController{
    constructor(){
       
    }

    getAll =  async(req, res, next)=> {
        try{
            let clients // = select no banco como validarei com zod a vinda do front não é necessario service
            res.status(200).json({message:"sucesso", clients:clients});
        }
        catch(e){
           next(e);
        }
    }

    getOne = async (req, res, next) => {
        const clientId = req.params.id;
        try{
            
            res.status(200).json({message:"sucesso", client:clientId})
        }
        catch(e){
            next(e);
        }
    }

    patch = async(req, res, next)=>{
        const clientId = req.params.id;
        const clientModification = req.body;
        try{
            res.status(200).json({message:"sucesso", idClient:  clientId, clientMod: clientModification});
        }
        catch(e){
            next(e);
        }
    }

    post = async(req, res, next)=>{
        const client = req.body;
        try{
            res.status(200).json({message:"sucesso", body: req.body});
        }
        catch(e){
            next(e);
        }
    }

    remove = async(req, res, next)=>{
        const clientId = req.params.id;
        try{
            res.status(200).json({message:"sucesso", body: `id deleted: ${clientId}`});
        }
        catch(e){
            next(e);
        }
    }
}