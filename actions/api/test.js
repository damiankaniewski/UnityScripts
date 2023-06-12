module.exports = {
    homepage(req, res) {
        res.send('Strona główna');
    },
  
    loginpage(req, res) {
      res.send('Strona logowania');
    },
  
    registerpage(req, res) {
      res.send('Strona rejestracji');
    }
}
