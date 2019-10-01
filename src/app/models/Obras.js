module.exports = (sequelize, DataTypes) => {
    const Obras = sequelize.define('Obras', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        endereco: DataTypes.STRING,
        concluida: DataTypes.BOOLEAN
    })

    Obras.associate = models => {
        Obras.hasMany(models.Emprestimos, {
            foreignKey: 'obraId',
            targetKey: 'obraId',
            as: 'emprestimos'
        })
    }
    
    return Obras
}