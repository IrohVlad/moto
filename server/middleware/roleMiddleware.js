import jwt from 'jsonwebtoken'
export default function role(role){
    return (req, res, next) => {
        try{
            const token = req.headers.authorization;
            if(!token){
                return res.status(401).send('не авторизован')
            }
            const decoded = jwt.verify(token, 'secret');
            if(decoded.role !== role){
                return res.status(401).send('в доступе отказано')
            }
            req.user = decoded;
            next()
        } catch (e){
            res.status(401).send('не авторизован')
        }
    }
}