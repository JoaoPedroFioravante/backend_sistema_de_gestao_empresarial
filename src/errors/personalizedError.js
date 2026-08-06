export default class personalizedError extends Error{
    constructor(code, message){
        super(message);
        this.code = code;
    }
}