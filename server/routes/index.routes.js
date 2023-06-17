const router = require("express").Router();

router.use("/api", require("./tarea.routes"));

module.exports = router;
