const {Agendas: Agendas } = require('../models');


class AgendaController{
    constructor(params){
    }


    async listarAgendas(req, res) {
        try {
            const todosAgendas = await Agendas.findAll();   
            res.status(200).json(todosAgendas);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async criarAgenda(req, res) {
        try {
            const novoAgenda = await Agendas.create(req.body);   
            res.status(200).json(novoAgenda);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async agenda(req, res) {
        try {
            const id = req.params.id;
            const agenda = await Agendas.findByPk(id);

            if (agenda) {
                res.status(200).json(agenda);
            } else {
                res.status(404).json({ error: 'Agenda não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Agendas.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Dados do agenda atualizados' });
            } else {
                res.status(404).json({ error: 'Agenda não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Agendas.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Agenda deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Agenda não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


}

module.exports = AgendaController;