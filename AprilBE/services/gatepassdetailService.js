const db = require("../models");
const moment = require('moment');
const { QueryTypes } = require('sequelize')

exports.getAll = async () => {
    try {
        const result = await db.GatepassDetail.findAll({
            order: [["ProductID", "ASC"]],
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.getgatepassdetail = async () => {
    try {
        const query =
"SELECT gatepass_detail_id, department_name, dmsproduct.product_name, dmsproduct.product_desc, dmsgatepassdetail.product_id, dmsgatepassdetail.gatepass_id, serial_no, dmsgatepassdetail.description, quantity, satuan, remark " +
    "FROM public.dmsgatepassdetail " +
    "inner join dmsproduct on dmsproduct.product_id = dmsgatepassdetail.product_id " +
    "inner join dmsgatepass on dmsgatepass.gatepass_id = dmsgatepassdetail.gatepass_id " +
    "inner join dmsdepartment on dmsdepartment.department_id = dmsgatepass.department_id"
    
        const result = await db.sequelize.query(query, {
            type: QueryTypes.SELECT
        })

        return result
    } catch (err) {
        throw err
    }
}


exports.update = async (id, data) => {
    try {
        const result = await db.GatepassDetail.update(data, {
            where: { GatepassDetailID: id },
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.create = async (data) => {
    try {
        console.log("data", data)
        data.GatepassDetailID = "GTPD_" + moment(new Date()).format("YYMMDDhhmmss")

        const result = await db.GatepassDetail.create(data)

        return result
    }
    catch (err) {
        throw err
    }
}

exports.delete = async (id) => {
    try {
        const result = await db.GatepassDetail.destroy({
            where: {
                GatepassDetailID: id,
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
        const result = await db.GatepassDetail.findByPk(id)

        return result
    }
    catch (err) {
        throw err
    }
}