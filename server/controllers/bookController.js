import { Books } from "../models/model.js";

export default class bookController {
    static async getAll(req, res) {
        const books = await Books.findAll();
        res.json(books);
    }
    static async create(req, res){
        const {mot, track, number, email} = req.body;
        try{
            const book = await Books.create({mot, track, number, email});
            res.json(book);
        } catch {
            res.json({error: 'Не удалось создать'});
        }
        
    }
}