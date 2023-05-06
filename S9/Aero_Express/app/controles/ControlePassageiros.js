// const { passageiros } = require('../modelos/Passageiros');

const {Passageiros: Passageiros} = require('../modelos');


class ControlePassageiros {
    constructor(){

    }
    // Inicialize as propriedades da classe, se necessário

    async todos(req, res) {
        try {
            const Todospassageiros = await Passageiros.findAll();
            res.status(200).json(Todospassageiros);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async criar(req, res) {
        try {
            const novoPassageiro = await Passageiros.create(req.body);
            res.status(200).json(novoPassageiro); 
        }catch (err) {
            res.status(500).json({ err: err.message});
        } 
    }

    async apenasUm(req, res) {
        try {
            const id = req.params.id;
            const passageiro = await Passageiros.findByPk(id);

            if (passageiro) {
                res.status(200).json(passageiro);
            } else {
                res.status(404).json({ error: 'Passsageiro não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Passageiros.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Dados do passageiro atualizados' });
            } else {
                res.status(404).json({ error: 'Passsageiro não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Passageiros.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Passageiro deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Passsageiro não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}


module.exports = ControlePassageiros;