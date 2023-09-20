const { CicloParking } = require('../db')

const Infocontroller = async (req, res) => {
    try {
        const getcicloparkings = await CicloParking.findAll()
        if (getcicloparkings.length > 0) return res.status(200).json(getcicloparkings)
        else throw new Error('No hay info disponible')
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { Infocontroller }