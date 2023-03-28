import express from 'express';
import ProductModel from '../../modal/products';

const router = express.Router();
//creating controler
router.get('/', (req: any, res: any, next: any) => {
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.put('/status', (req: any, res: any, next: any) => {
    try {
        const item = req.body;
        ProductModel.updateOne(
            { productname:item.productname},
            {
                status:"approved by admin"
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})
router.put('/verify', (req: any, res: any, next: any) => {
    try {
        const item = req.body;
        ProductModel.updateOne(
            { productname:item.productname},
            {
                status:"verified"
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

export default router;