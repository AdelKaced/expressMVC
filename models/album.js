const mysql = require('../db');

const findAll = async() => {
    const result = await mysql.query('SELECT * from album');
    return result[0];
}

const findOne = async(id) => {
    const result = await mysql.query('Select * from album where id=?',id);
    return result[0];
}


const createOne = async(body) => {
    const result = await mysql.query('insert into album set ?',body);
    return findOne(result[0].insertId);
    }

    module.exports = {
        findAll ,
        findOne,
        createOne 
    }