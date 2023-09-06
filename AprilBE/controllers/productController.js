const productService = require('../services/productService')

exports.getAll = async (req, res) => {

    try {
        const result = await productService.getAll()

        await res.status(200).send(JSON.stringify(result))
    }
    catch (err) {
        throw err
    }
}


exports.update = async (req, res) => {
    const id = req.params.id
    console.log("req: ", req)
    try {
        await productService.update(id, req.body)
        await res.status(200).send({ status: true, message: "Update Succesfully" });
    }
    catch (err) {
        throw err
    }
}

exports.create = async (req, res) => {
    console.log("req.body: ", req.body)
    // console.log("res: ", res)
    try {
        const result = await productService.create(req.body)
        console.log("result: ", result)
        await res.status(200).send({ status: true, message: "Create Succesfully" });
    }
    catch (err) {
        throw err
    }
}

exports.delete = async (req, res) => {

    const id = req.params.id

    try {
        await productService.delete(id)
        await res.status(200).send({ status: true, message: "Delete Succesfully" });
    }
    catch (err) {
        throw err
    }
}

// exports.searchProducts = async (req, res) => {
//     try {
//         const { keyword } = req.query;
//         const products = await productService.searchProducts(keyword);
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Terjadi kesalahan dalam pencarian produk.' });
//     }
// };