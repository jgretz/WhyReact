'use strict';

const cache = require('memory-cache');
const key = "COMPANIES";

const defaultList = [
  {name:'Truefit'},
  {name:'e-Staff'}
];

const getCompanies = () => {
  const companies = cache.get(key);
  return companies ? companies : defaultList;
};

module.exports = {
  get: (req, res) => {
    res.json(getCompanies());
  },

  post: (req, res) => {
    const companies = getCompanies();

    companies.push(req.body);
    cache.put(key, companies);

    res.json(companies);
  }
}
