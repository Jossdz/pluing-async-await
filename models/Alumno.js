const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
  nombre: String
}, {
  timestamps: { 
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Alumno = mongoose.model('Alumno', alumnoSchema)
module.exports = Alumno

