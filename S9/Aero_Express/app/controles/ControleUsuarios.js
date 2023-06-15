// const { passageiros } = require('../modelos/Passageiros');

const {Usuarios: Usuarios} = require('../modelos');


class ControleUsuarios{
    constructor(){

    }
    // Inicialize as propriedades da classe, se necessário

    async criar(req, res) {
        try {
            const novoUsuario = await Usuarios.create(req.body);
            res.status(200).json(novoUsuario); 
        }catch (err) {
            res.status(500).json({ err: err.message});
        } 
    }

    async logar(req, res) {
        try {
            const authHeader = req.headers.authorization;
            
            
            if (!authHeader) {
                res.status(401).json({ error: 'Credenciais não fornecidas.' });
                return;
            }

            const [type, token] = authHeader.split(' ');
            
            
            if (type.toLowerCase() !== 'basic') {
                res.status(401).json({ error: 'Tipo de autenticação inválido.' });
                return;
            }

            const credentials = Buffer.from(token, 'base64').toString('utf-8');
            const [login, senha] = credentials.split(':');

            const usuario = await Usuarios.findOne({ 
                where: { login: login, senha: senha }
            });

            if (usuario) {
              res.status(200).json({ authenticated: true });
            } else {
              res.status(401).json({ authenticated: false });
            }

        } catch (e) {
            res.status(500).json({ error: e.message });
        }

    }

}


module.exports = ControleUsuarios;