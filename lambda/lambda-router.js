const router = require('express').Router();


const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

//*************returns an array of all cohorts*************/

router.get('/', (req, res) => {
    db('cohorts')
    .then(cohorts => {
      res.status(200).json(cohorts)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//*************returns a cohort with a the matching id*************/

router.get('/:id', (req, res) => {
    db('cohorts')
    .where({id: req.params.id})
    .first()
    .then(cohort => {
      res.status(200).json(cohort)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//******all students for a cohort with the specified id*****/

router.get('/:id/students', (req, res) => {
    const {id} = req.params
    db('students')
    .where("cohort_id", id)
        .then(names => {
            if (names.length) {
                res.json(names)
            } else {
                res.status(400).json({ message: "This cohort does not have any students" })
            }
    })
    .catch(() => {
        res.status(500).json({ message: "Could not find students in this cohort" })
    })
});


//************adds a new cohort************/

router.post('/', (req, res) => {
    db('cohorts')
    .insert(req.body)
    .then(([id]) => {
  
      db('cohorts')
      .where({ id })
      .first()
      .then(response => {
        res.status(200).json(response);
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
});
  
//***********update a cohort****************/

router.put('/:id', (req, res) => {
    db('cohorts')
    .where({ id: req.params.id })
    .update(req.body)
    .then(response => {
      if(response > 0) {
        db('cohorts')
        .where({ id: req.params.id })
        .first()
        .then(response => {
          res.status(200).json(response)
        })
      } else {
        res.status(404).json({ message: 'cohort not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});
  
//*************delete a cohort**************/

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db('cohorts')
    db('cohorts')
    .where({ id })
    .del()
    .then(response => {
      if(response > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'That cohort could not be found' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });
  
module.exports = router;