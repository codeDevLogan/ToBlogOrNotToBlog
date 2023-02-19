const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Message.belongsTo(User, {
    foreignKey: 'id',
})

module.exports = { User, Post };