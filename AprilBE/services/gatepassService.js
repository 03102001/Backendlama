const { now } = require("lodash");
const db = require("../models");
const moment = require('moment');
const { QueryTypes } = require("sequelize");

exports.getAll = async () => {
    try {
        const result = await db.Gatepass.findAll({
            order: [["GatepassName", "ASC"]],
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.update = async (id, data) => {
    try {
        const result = await db.Gatepass.update(data, {
            where: { GatepassID: id },
        })

        return result
    }
    catch (err) {
        throw err
    }
}

exports.create = async (data) => {
    try {
        data.GatepassID = "GTP_" + moment(new Date()).format ("YYMMDDhhmmss")
        const result = await db.Gatepass.create(data)

        return result
    }
    catch (err) {
        throw err
    }
}

exports.delete = async (id) => {
    try {
        const result = await db.Gatepass.destroy({
            where: {
                GatepassID: id,
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
        const result = await db.Gatepass.findByPk(id)

        return result
    }
    catch (err) {
        throw err
    }
}

exports.getData = async (data) => {
    console.log("data: ",data )
    const split = data.split('&');
    startDate = split[0]
    endDate = split[1]
    var date = new Date()
    var month = date.getMonth()+1
    var year = date.getFullYear()
    const ds = startDate, es = endDate;
    console.log("file: slushService.js:75 | getData | es:", es)
    console.log("file: slushService.js:75 | getData | ds:", ds)
    if (!startDate && !endDate) {
        ds = moment(new Date(year,month,1)).format('YYYY-MM-DD HH:mm:ss');
        es = moment(new Date(year, month,31)).format('YYYY-MM-DD HH:mm:ss')
    }
    try {
        const query = 'SELECT * FROM public.dmsgatepass where "createdAt"' + " between '"+ds+"' and '"+es+"';"
        console.log("query: ", query)
        const result = await db.sequelize.query(query, {
          type: QueryTypes.SELECT
      })
        return result;
    } catch (error) {
        throw error;
    }
}
