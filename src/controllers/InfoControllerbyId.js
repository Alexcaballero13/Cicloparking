const { CicloParking } = require('../db')

const InfocontrollerbyId = async (req, res) => {
    try {
        const { Id } = req.params
        const cicloParking = await CicloParking.findByPk(Id);

        if (cicloParking) {
            return res.status(200).json(cicloParking);
        } else {
            throw new Error('No se encontró información con el ID especificado');
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { InfocontrollerbyId };