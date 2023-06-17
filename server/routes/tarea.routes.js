const router = require("express").Router();
const Tarea = require("../models/Tarea.model");

router.get("/", async (req, res, next) => {
  try {
    const tareas = await Tarea.find();
    return res.status(200).json(tareas);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    return res.status(200).json(tarea);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (req.body.nombre)
      return res.status(400).json({ message: "Bad request" });
    const tarea = await Tarea.create(req.body);
    return res.status(200).json(tarea);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(tarea);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
