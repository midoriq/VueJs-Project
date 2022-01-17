const knex = require("./knex");

// knex("name of the table").operation("argument");
function createData(Data,Tname){
    return knex(Tname).insert(Data);
};
function getAllData(Tname){
    return knex(Tname).select("*");
};
async function getData(Tname,nrRows){
    const maxId = await knex(Tname).select("id").orderBy("id","desc");
    return knex(Tname).select("*").where("id",'>',maxId.length - nrRows);
}
function getLongitudeLatitude(name){
    return knex("Coords").select(['Latitude' ,'Longitude']).where("Name",'=',name).then(result => result[0]);
};


// function deleteData(id,Tname){
//     return knex(Tname).where("id",id).del();
// };
// function updateData(id,Data,Tname){
//     return knex(Tname).where("id",id).update(Data);
// };

module.exports = {
    createData,
    getAllData,
    getData,
    getLongitudeLatitude,
}