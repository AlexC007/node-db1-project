const knex = require('knex');

const configOptions = require('../knexfile').development;

const db = knex(configOptions)
/*module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('accounts');
  }
  
  function findById(id) {
    return db('accounts')
      .where({ id: Number(id) })
      .first();
  }
  
  function insert(account) {
    return db('accounts')
      .insert(account)
      .then(ids => ({ id: ids[0] }));
  }
  
  function update(id, account) {
    return db('accouts')
      .where('id', Number(id))
      .update(account);
  }
  
  function remove(id) {
    return db('acounts')
      .where('id', Number(id))
      .del();
  }*/
  module.exports = db;
