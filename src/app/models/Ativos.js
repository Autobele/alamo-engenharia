module.exports = (sequelize, DataTypes) => {
    const Ativos = sequelize.define('Ativos', {
        patrimonio: DataTypes.STRING,
        emprestada: DataTypes.BOOLEAN,
        ferramentaId: DataTypes.INTEGER
    })

    Ativos.associate = models => {
        // Ativos.belongsTo(models.Ferramentas, { foreignKey: 'ferramenta_id' })
        Ativos.belongsTo(models.Ferramentas, {as: 'ferramenta', foreignKey: 'ferramentaId'})
    }
    
    return Ativos
}