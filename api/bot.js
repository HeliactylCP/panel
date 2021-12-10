module.exports.load = async function(app, db) {
    (require("../bot.js")).load(app, db);
}