module.exports = (sequelize, DataTypes) => {
    const Funcionarios = sequelize.define('Funcionarios', {
        name: DataTypes.STRING,
        matricula: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    })

    Funcionarios.associate = models => {
        Funcionarios.hasOne(models.Emprestimos, {
            foreignKey: 'funcionarioId',
            targetKey: 'funcionarioId',
            as: 'emprestimos'
        })
    }

    return Funcionarios
}