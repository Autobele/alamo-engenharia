module.exports = (sequelize, DataTypes) => {
    const Emprestimos = sequelize.define('Emprestimos', {
        obraId: DataTypes.INTEGER,
        ferramentaId: DataTypes.INTEGER,
        funcionarioId: DataTypes.INTEGER,
        observacao: DataTypes.STRING,
        devolvido: DataTypes.BOOLEAN,
    })

    Emprestimos.associate = models => {
        // Ativos.belongsTo(models.Ferramentas, { foreignKey: 'ferramenta_id' })
        Emprestimos.belongsTo(models.Ferramentas, {as: 'ferramenta', foreignKey: 'ferramentaId'})
        Emprestimos.belongsTo(models.Ferramentas, {as: 'funcionario', foreignKey: 'funcionarioId'})
        Emprestimos.belongsTo(models.Ferramentas, {as: 'obra', foreignKey: 'obraId'})

    }
    
    return Emprestimos
}