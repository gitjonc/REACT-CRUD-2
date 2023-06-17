const { Schema, model } = require("mongoose");

const tareaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    default: "tarea",
  },

  detalles: {
    type: String,
    maxLength: 200,
  },

  prioridad: {
    type: String,
    enum: ["Alta", "Media", "Baja"],
    default: "Baja",
  },

  completada: {
    type: Boolean,
    default: false,
  },
});

const Tarea = model("Tarea", tareaSchema);

module.exports = Tarea;
