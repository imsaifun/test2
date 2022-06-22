import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;

    if (method !== 'POST') {
        return res.status(400).json({
            success: false,
            message: 'only post requests on this route'
        })
    }
    if (method === "POST") {
        // if (!token || token !== process.env.token) {
        //     return res.status(401).json("Not authenticated!")
        // }
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}