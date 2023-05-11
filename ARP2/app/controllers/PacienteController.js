const {Pacientes: Pacientes } = require('../models/');
const {Agendas: Agendas } = require('../models/');


class PacienteController{
    constructor(params){
    }


    async listarPacientes(req, res) {
        try {
            const todosPacientes = await Pacientes.findAll(
                {
                    include: {model: Agendas, as: 'agendas'},  
                    order: [
                        ['id', 'DESC']
                    ]
                }
            );   
            res.status(200).json(todosPacientes);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async criarPaciente(req, res) {
        try {
            const novoPaciente = await Pacientes.create(req.body);   
            res.status(200).json(novoPaciente);
        }catch (err) {
            res.status(500).json({ err: err.message});
        }   
    }

    async paciente(req, res) {
        try {
            const id = req.params.id;
            const paciente = await Pacientes.findByPk(id, {include: {model: Agendas, as: 'agendas'}});

            if (paciente) {
                res.status(200).json(paciente);
            } else {
                res.status(404).json({ error: 'Paciente não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Pacientes.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Dados do paciente atualizados' });
            } else {
                res.status(404).json({ error: 'Paciente não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Pacientes.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Paciente deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Paciente não encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


}

module.exports = PacienteController;