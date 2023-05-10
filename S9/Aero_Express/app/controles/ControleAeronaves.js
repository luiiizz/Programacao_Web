// const { passageiros } = require('../modelos/Passageiros');

const {Aeronaves: Aeronaves} = require('../modelos');
const {Passageiros: Passageiros} = require('../modelos');


class ControleAeronaves{
    constructor(){

    }
    // Inicialize as propriedades da classe, se necessário

    async todos(req, res) {
        try {
            const TodasAeronaves = await Aeronaves.findAll({include: {model: Passageiros, as: 'passageirosNesta'}});   
            res.status(200).json(TodasAeronaves);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async criar(req, res) {
        try {
            const novaAeronve = await Aeronaves.create(req.body);
            res.status(200).json(novaAeronve); 
        }catch (err) {
            res.status(500).json({ err: err.message});
        } 
    }

    async apenasUm(req, res) {
        try {
            const codigo = req.params.codigo;
            const aernove = await Aeronaves.findByPk(codigo, {include: {model: Passageiros, as: 'passageirosNesta'}});

            if (aernove) {
                res.status(200).json(aernove);
            } else {
                res.status(404).json({ error: 'Aeronave não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const codigo = req.params.codigo;
            const [updatedRows] = await Aeronaves.update(req.body, {
                where: { codigo },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Dados do aeronave atualizados' });
            } else {
                res.status(404).json({ error: 'Aeronave não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            const codigo = req.params.codigo;
            const deletedRows = await Aeronaves.destroy({
                where: { codigo },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Aeronave deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Aeronave não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}


module.exports = ControleAeronaves;