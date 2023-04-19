import PostMessage from '../models/postMessage.js'

export const getPosts = async(req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createPost = async (req, res) => {
    const usersPost = req.body
    const newPost = new PostMessage(usersPost)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}