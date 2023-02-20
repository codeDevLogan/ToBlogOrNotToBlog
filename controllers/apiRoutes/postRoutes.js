const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../../config/connection');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create ({
            ...req.body,
            poster_id: req.session.user_id
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json({ message: "Server Error: Please try again later." });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.update({
            ...req.body,
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        
    }
})