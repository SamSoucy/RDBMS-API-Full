const router = require('express').Router();


const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

router.get('/', (req, res) => {
    db('students')
    .then(students => {
      res.status(200).json(students)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;