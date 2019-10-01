const { User } = require('../models')

class SessionController {
    async create (req, res) {
        // return res.render('auth/signin')
        return res.render('auth/signin')
    }

    async store (req, res) {
        const { user , password_hash } = req.body

        const userLogin = await User.findOne({where: { user , password_hash}})

        if(!userLogin) {
            return res.render('auth/signin', {msg: 'Usuário ou Senha inválido'})
        }

        req.session.user = userLogin

        return res.redirect('/app/dashboard')
    }

    destroy(req, res) {
        req.session.destroy(() => {
            res.clearCookie('root')
            return res.redirect('/')
        })
    }
}
module.exports = new SessionController()