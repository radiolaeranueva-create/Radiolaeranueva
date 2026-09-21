const cron = require("node-cron");

cron.schedule("0 5 * * *", () => {
  console.log("Ejecutando actualización diaria a las 05:00");
});

console.log("Scheduler activo: cada día a las 05:00");

setInterval(() => {}, 60 * 60 * 1000);
