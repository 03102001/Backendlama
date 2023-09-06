const { QueryTypes } = require("sequelize");

const db = require("../models");
const moment = require('moment');

exports.getAll = async () => {
    try {
        const result = await db.Product.findAll({
            order: [["ProductName", "ASC"]],
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.update = async (id, data) => {
    try {
        const result = await db.Product.update(data, {
            where: { ProductID: id },
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.create = async (data) => {
    console.log("data: ", data)
    try {
        data.ProductID = "PDT_" + moment(new Date()).format("YYMMDDhhmmss")
        const result = await db.Product.create(data)
        console.log("hasil: ", result)
        return result
    }
    catch (err) {
        throw err
    }
}

exports.delete = async (id) => {
    try {
        const result = await db.Product.destroy({
            where: {
                ProductID: id,
            },
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.getById = async (id) => {
    try {
        const result = await db.Product.findByPk(id)

        return result
    }
    catch (err) {
        throw err
    }
}

exports.searchReq = async (param) => {
    try {
        const temp = param.split("=");
        const request = temp[0];
        console.log ("request:", request)
        const keyword = temp[1];
        console.log("keyword:", keyword)

        const getquery =
            "select * from dmsproduct where "+request+" like '%" + keyword + "%' ";
        console.log("query: ", getquery)
        var search = await db.sequelize.query(getquery, {
            type: QueryTypes.SELECT,
        });
        return search;

    } catch (err) {
        throw err;
    }
};

exports.search = async (id) => {
    try {
        // Lakukan operasi pencarian berdasarkan 'keyword' di dalam database
        const products = await db.Product.findByPk(id);
        return products;
    } catch (error) {
        throw new Error('Terjadi kesalahan dalam pencarian produk di dalam database.');
    }
};