const {Router} = require('express')
const router = Router()

const {catchError} = require('../middlewares/errorHandler')

const {
  getAll,
  newALumno,
  viewNew
} = require('../controller/alumnos')

const Alumno = require('../models/Alumno')

router

  .get('/', catchError(getAll))
  .get('/new', catchError(viewNew))
  .post('/new', catchError(newALumno))

  module.exports = router