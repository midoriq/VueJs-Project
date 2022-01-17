const knex = require("./knex");

// knex("name of the table").operation("argument");
function createData(Data,Tname){
    return knex(Tname).insert(Data);
};
function getAllData(Tname){
    return knex(Tname).select("*");
};
function deleteData(id,Tname){
    return knex(Tname).where("id",id).del();
};
function updateData(id,Data,Tname){
    return knex(Tname).where("id",id).update(Data);
};

module.exports = {
    createData,
    getAllData,
    deleteData,
    updateData
}