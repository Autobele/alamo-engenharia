const { Obras } = require('../models')

class ObraController {

    async index(req, res) {
        let obras = await Obras.findAll({})
          let msg = ''
          if(obras.length == 0){
              msg = 'Nenhum obra cadastrada.'
          }
      
          return res.render('auth/obras/obra-general', {obras, msg})
    }


    async register(req, res) {
        
    let {id} = req.params

    if (id) {
      let [{nome, descricao, endereco}] = await Obras.findAll({ where: { id }}).map(el => el.get({plain: true}))
      return res.render('auth/obras/obra-register', {nome, descricao, endereco})
    }

    return res.render('auth/obras/obra-register')
    }

    async show(req, res) {}

    async store(req, res) {

        await Obras.create(req.body)
        let msg = 'Obra Cadastrada'
        return res.render('auth/obras/obra-register', {msg})
    
    }

    async show(req, res) {}

    async update(req, res) {}

    async changeStatus(req, res) {}

}

module.exports = new ObraController()