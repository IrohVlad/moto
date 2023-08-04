import { Users } from "../models/model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export default class userController {
    static async register(req, res){
        const {login, password} = req.body;
        if (!login || !password) {
            return res.status(400).send('Не корректные данные')
        }
        const Log = await Users.findOne({where: {login}})
        if (Log) {
            return res.status(400).send('Такой аккаунт уже есть')
        }
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await Users.create({login, hashPassword});
        const token = jwt.sign({ login: user.login, role: user.role}, 'secret');
        res.json(token)
    }
    static async login(req, res){
        const {login, password} = req.body;
        if (!login || !password) {
            return res.status(400).send('Error')
        }
        const user = await Users.findOne({where: {login}})
        if (!user) {
            return res.status(400).send('Такого аккаунта нет')
        }
        const match = await bcrypt.compare(password, user.hashPassword);
        if (!match){
            return res.status(400).send('Error')
        }
        const token = jwt.sign({ login: user.login, role: user.role}, 'secret');
        res.json(token)
    }
    static async authCheck(req, res) {
        const token = jwt.sign({login: req.user.login, role: req.user.role}, 'secret')
        res.json(token);
    }
}