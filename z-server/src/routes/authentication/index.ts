import express from 'express';
import UserModel from '../../modal/user';

const router = express.Router();
//creating controler

router.post('/login', (req: any, res: any, next: any) => {
    try {
        const data = req.body;
        UserModel.find({name:data.name,password:data.password})
        .then((document) => {
            if(document){  //.length!=0
                const login={
                    message:"Login Success",
                    data:document
                }
            res.json(login)
            }else{
                const login={message:"Login failed"}
                res.json(login)
            }
        });
    } catch (err) {
        next(err);
    }
});
export default router;