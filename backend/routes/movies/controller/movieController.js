const Movie = require('../model/Movie')

// Create movie
const createMovie =  async (req, res) => {
    try {
        const { title, director, runtime, rating, description } = req.body
        const newMovie = new Movie({
            title: title,
            director: director,
            runtime: runtime,
            rating: rating,
            description: description
        })
        const savedMovie = await newMovie.save()
        res
            .status(200)
            .json({ message: "movie has been saved", payload: savedMovie })
    }
    catch (err) {
        res.status(500).json({ message: "error", error: err })
    }
}

// Get all
const getAll = async (req, res) => {
    try {
        let allMovies = await Movie.find()
        res.status(200).json( allMovies )
    }
    catch (err) {
        res.status(500).json(err)
    }

}

// Get one
const getOne = async (req, res) => {
    const { id } = req.params
    try {
        let oneMovie = await Movie.findById(id)
        res.status(200).json( oneMovie )
    }
    catch (err) {
        res.status(500).json(err)
    }
}

// Update one
const updateOne = async (req, res) => {
    const { id } = req.body
    try {
        let updateOne = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if(updateOne === null) throw new Error("No movie with id found")
        res.status(200).json({ message: "updated movie", Movie: updateOne })
    }
    catch (err) {
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Delete one
const deleteOne =  async (req, res) => {
    const { id } = req.body
    console.log(req.body)
    try {
        let deleteOne = await Movie.findByIdAndDelete(id)
        if(deleteOne === null) throw new Error("No movie with id found")
        res.status(200).json({ message: "movie was deleted", payload: deleteOne })
    }
    catch (err) {
        res.status(500).json({ message: "there's an error", error: err.message })
    }
}

module.exports = {
    createMovie,
    getAll,
    getOne,
    updateOne,
    deleteOne
}