const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    try {
      await User.create(req.body)
      return res.redirect('/')
    } catch (err) {
      res.render('auth/signin')
    }
  }
  
}

module.exports = new UserController()
