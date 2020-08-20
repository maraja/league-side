import { default as db } from './db';

// console.log(db)

const {writeFileSync} = require('fs');
const Sequelize = require('sequelize');
const sequelizeErd = require('sequelize-erd');

var fs        = require('fs');
var os = require('os');
var path      = require('path');
var basename  = 'index.js';
// Require our models. Running each module registers the model into sequelize
// so any other part of the application can simply call sequelize.model('User')
// to get access to the User model.
// require("./models");

let modelFolder = path.join(process.cwd(), 'src', 'db', 'models')
// console.log("models", modelFolder)

fs
  .readdirSync(modelFolder)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = db['import'](path.join(modelFolder, file));
    // console.log(model);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// (async function(){
//   const svg = await sequelizeErd({ source: db }); // sequelizeErd() returns a Promise
//   writeFileSync('./erd.svg', svg);
// })();

export default db;
