const { Ativos } = require('../models')
const { Ferramentas } = require('../models')

class AtivoController {
  async index(req, res) {
    // let ativos = await Ativos.findAll()
    let ativos = await Ativos.findAll({
      attributes: ['id', 'patrimonio', 'emprestada'],
      include: {association: 'ferramenta'}
    })
    let ferramentas = await Ferramentas.findAll()
    let msg = ''
    if(ativos){
        msg = 'Nenhum ativo cadastrado.'
    }

    return res.render('auth/ativos/ativo-general', {ativos, ferramentas, msg})
  }

  async register(req, res) {
    let ativos = await Ativos.findAll()
    let ferramentas = await Ferramentas.findAll()
    return res.render('auth/ativos/ativo-register', {ativos, ferramentas})
  }

  async show(req, res) {
    
  }

  async store(req, res) {
    let ativos = await Ativos.findAll()
    const {patrimonio} = req.body
    let patrimonioExiste = await Ativos.findAll({ where: { patrimonio }}).map(el => el.get({plain: true}))
    let ferramentas = await Ferramentas.findAll()
    let msg = ''
   


    if(patrimonioExiste.length > 0) {
      msg = 'Patrimônio já existe na base de dados.'
      return res.render('auth/ativos/ativo-register', {ativos, ferramentas, msg})
    }
    await Ativos.create(req.body)
    msg = 'Ativo cadastrado'
    return res.render('auth/ativos/ativo-register', {ativos, ferramentas, msg})
  }

  async update(req, res) {
  }

  async changeStatus(req, res) {
    
    
  }

}

module.exports = new AtivoController()
