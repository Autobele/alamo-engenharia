const { Funcionarios, Obras , Ativos, Emprestimos} = require('../models')

module.exports = async (req, res, next) => {
    let funcionarios = await Funcionarios.findAll({where: {ativo: 1}})
    let obras = await Obras.findAll({where: {concluida: 0}})
    let ativos = await Ativos.findAll({where: {emprestada: 1}})
    let emprestimos = await Emprestimos.findAll({where: {devolvido: 1}})

    let qtdFuncionarios = funcionarios.length;
    let qtdObras = obras.length;
    let qtdAtivos = ativos.length;
    let qtdEmprestimos = emprestimos.length;

    return res.render('auth/dashboard', {qtdFuncionarios, qtdObras, qtdAtivos, qtdEmprestimos})
}