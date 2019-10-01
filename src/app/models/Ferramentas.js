module.exports = (sequelize, DataTypes) => {
    const Ferramentas = sequelize.define('Ferramentas', {
        modelo: DataTypes.STRING,
        marca: DataTypes.STRING,
    })

    Ferramentas.associate = models => {
        // Ativos.belongsTo(models.Ferramentas, { foreignKey: 'ferramenta_id' })
        Ferramentas.hasOne(models.Ativos, {
            foreignKey: 'ferramentaId',
            targetKey: 'ferramentaId',
            as: 'ativos'
        })

        Ferramentas.hasOne(models.Emprestimos, {
            foreignKey: 'ferramentaId',
            targetKey: 'ferramentaId',
            as: 'emprestimos'
        })
    }

    return Ferramentas
}