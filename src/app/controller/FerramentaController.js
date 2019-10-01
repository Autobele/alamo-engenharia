const {Ferramentas} = require('../models')

class FerramentasController {
    async index(req, res) {
        let ferramentas = await Ferramentas.findAll()
        let msg = ''
        if(ferramentas){
            msg = 'Nenhuma ferramenta cadastrada.'
        }

        return res.render('auth/ferramentas/ferramenta-general', {ferramentas, msg})
    }

    register(req, res) {
        return res.render('auth/ferramentas/ferramenta-register')
    }

    async store(req, res) {
        let {modelo, marca} = req.body
        let modeloExiste = await Ferramentas.findAll({where: {modelo, marca: marca}})
        let msg = ''
        console.log(modeloExiste.length)
        if(modeloExiste.length > 0){
            msg = 'Marca/Modelo já cadastrado na base de dados.'
            return res.render('auth/ferramentas/ferramenta-register', {msg})
        }

        await Ferramentas.create(req.body)
        return res.redirect('/app/tools')
    }

}

module.exports = new FerramentasController()