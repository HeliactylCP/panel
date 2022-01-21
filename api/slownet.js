module.exports.load = async function(app, db) {
 app.get("/slownet", async (req, res) => {
  res.send("Your network is too slow to load heliactyl! Trying again in 5 seconds...<script>window.location.href='/dashboard'</script>") 
 }) 
}
