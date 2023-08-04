import jwt from 'jsonwebtoken'
export default function auth(req, res, next){
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).send('не авторизован')
        }
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next()
    } catch(e){
        res.status(401).send('не авторизован')
    }
}