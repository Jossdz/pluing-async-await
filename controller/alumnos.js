//controller
const Alumno = require('../models/Alumno')

exports.getAll = async (req, res, next) => {
  const alumnos = await Alumno.find()
  res.render('alumnos', {alumnos})
}

exports.viewNew = async (req, res, next) => {
  res.render('nuevoAlumno')
}

exports.newALumno = async(req, res, next) => {
  const { nombre } = req.body
  if(nombre == '') throw new Error('Como no vas a tener nombre :v')
  const nuevoAlumno = new Alumno({nombre})
  const saved = await nuevoAlumno.save()
  res.redirect('/alumnos')
}