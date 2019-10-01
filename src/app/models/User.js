module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        user: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User
}