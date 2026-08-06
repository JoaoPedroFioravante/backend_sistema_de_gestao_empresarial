export default class clientController{
    #clientService;

    constructor(clientService){
        this.#clientService = clientService;
    }

    async getAll(req, res, next) {
        try{
            const clients = await this.#clientService.getAll();
            res.status(200).json({message:"sucesso", clients:clients});
        }
        catch(e){
           next(e);
        }
    }

    async getOne(req, res, next){
        const clientId = req.params.id;
        try{
            const client = await this.#clientService.getOne(clientId);
            res.status(200).json({message:"sucesso", client:client})
        }
        catch(e){
            next(e);
        }
    }

    async patch(req, res, next){
        const clientId = req.params.id;
        const clientModification = req.body;
        try{
            await this.#clientService.patch(clientId, clientModification);
            res.status(200).json({message:"sucesso"});
        }
        catch(e){
            next(e);
        }
    }

    async post(req, res, next){
        const client = req.body;
        try{
            await this.#clientService.post(client);
            res.status(200).json({message:"sucesso", body: req.body});
        }
        catch(e){
            next(e);
        }
    }

    async remove(req, res, next){
        const clientId = req.params.id;
        try{
            await this.#clientService.remove(clientId);
            res.status(200).json({message:"sucesso", body: `id deleted: ${clientId}`});
        }
        catch(e){
            next(e);
        }
    }
}