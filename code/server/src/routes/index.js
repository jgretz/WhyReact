'use strict';

const cache = require('memory-cache');
const key = "COMPANIES";

const defaultList = [
  {name:'Truefit'},
  {name:'e-Staff'}
];

module.exports = {
  get: (req, res) => {
    let companies = cache.get(key);
    if (!companies) {
      companies = defaultList;
      cache.put(key, defaultList);
    }

    res.json(companies);
  },

  post: (req, res) => {
    const companies = cache.get(key);
    companies.push(req.body);

    cache.put(key, companies);

    res.json(companies);
  }
}
