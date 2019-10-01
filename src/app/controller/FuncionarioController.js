const { Funcionarios } = require('../models')

class FuncionarioController {
  async index(req, res) {

    let funcionarios = await Funcionarios.findAll()

    if(funcionarios) {
      var msg = 'Nenhum funcionário cadastrado.'
    }
    return res.render('auth/provider/provider-general', { funcionarios, msg })
  }

  async register(req, res) {

    let {id} = req.params

    if (id) {
      let [{name, matricula}] = await Funcionarios.findAll({ where: { id }}).map(el => el.get({plain: true}))
      return res.render('auth/provider/providers-register', {name, matricula, id})
    }

    return res.render('auth/provider/providers-register')
  }

  async show(req, res) {

    let {id} = req.params

    let [{name, matricula, ativo}] = await Funcionarios.findAll({ where: { id }}).map(el => el.get({plain: true}))
    return res.render(`auth/provider/providers-edit`, {name, matricula, ativo, id})

  }

  async store(req, res) {

    let { matricula } = req.body
    let { id } = req.params

    let matriculaExiste = !await Funcionarios.findAll({ where: { matricula }})

    if (matriculaExiste) {
      return res.render('auth/provider/providers-register',
        { msg: 'Matrícula já existe no banco de dados.', id})
    }

    await Funcionarios.create(req.body)
    return res.redirect('/app/providers')
  }

  async update(req, res) {
    try {
      let {id} = req.params
      await Funcionarios.update(req.body, {where: {id}}, { new: true })
      return res.redirect('/app/providers')
    } catch(err) {
      return res.redirect('/')
    }
  }

  async changeStatus(req, res) {
    
      let {id} = req.params
      
      let [currentStatus] = await Funcionarios.findAll({ where: { id }}).map(el => el.get({plain: true}).ativo)

      let newStatus = currentStatus == true ? false : true

      await Funcionarios.update({ativo: newStatus}, {where: {id}})

      return res.redirect('/app/providers')
    
  }

}

module.exports = new FuncionarioController()
