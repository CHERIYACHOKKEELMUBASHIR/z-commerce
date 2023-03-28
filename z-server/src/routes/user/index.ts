import express from 'express';
import cartModel from '../../modal/cart';
import ProductModel from '../../modal/products';

const router = express.Router();
router.get('/', (req: any, res: any, next: any) => {
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});
router.post('/addproduct', (req: any, res: any, next: any) => {
    try {
        const Item = req.body;
        ProductModel.findOne({ productname: Item.name }).then((document) => {
            if (document) {
                const result = {
                    msg: "Product Already exist",
                    data: document
                }
                res.json(result)
            }
            else {
                ProductModel.insertMany([Item]).then((document) => {
                    const result = {
                        msg: "product added successfull",
                        data: document
                    }
                    res.json(result)
                });
            }
        });

    } catch (err) {
        next(err);
    }
})

router.post('/addtocart', (req: any, res: any, next: any) => {
    try {
        cartModel.findOne({ name: req.body.name}).then((document) => {
            if (document) {
                const result = {
                    msg: "order Already Exist Check Your Cart",
                    data: document
                }
                res.json(result)
            }
            else {
                const foodItem = req.body;
                cartModel.insertMany([foodItem]).then((document) => {
                    const result = {
                        msg: "Ordered successfully",
                        data: document
                    }
                    res.json(result)
                });
            }
        });
    

    } catch (err) {
    next(err);
}

})
router.get('/list', (req: any, res: any, next: any) => {
    try {
        cartModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.post('/delete', (req: any, res: any, next: any) => {
    try {
        const items = req.body;
        cartModel.deleteOne({ name: items.name })
            .then((result) => {
                res.json(result);
            })

    } catch (err) {
        next(err);
    }
})

export default router;