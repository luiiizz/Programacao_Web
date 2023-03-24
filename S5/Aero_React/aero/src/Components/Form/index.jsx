import Header from "../Header";
import './style2.css';

const Form = () => {
    return <div>
    
    <Header/>

    <main className="container main-content">
    
        <nav className="formul flex column">
            {/* <!-- Tag para quebra de linha e titulo --> */}
            <br/><h4>Cadrastro de Passageiros:</h4>

            {/* <!-- Tag para formulario, sendo input para inserção de informações e labels para legendas --> */}
            <form className="flex column" action="file2.html" method="get">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/><br/><br/>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required/><br/><br/>

                <label for="dtnasc">Data Nascimento:</label>
                <input type="date" id="dtnasc" name="dtnasc"/><br/><br/>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required/><br/><br/>

                <div className="sex">
                    <label for="sexo">Sexo:</label>

                        <input type="radio" id="sexo_feminino" name="sexo" value="feminino"/>
                        <label for="sexo_feminino">Feminino</label>
                        <input type="radio" id="sexo_masculino" name="sexo" value="masculino"/>
                        <label for="sexo_masculino">Masculino</label><br/><br/>
                </div>

                <label for="foto">Foto:</label>
                <input type="file" id="foto" name="foto"/><br/><br/>

                <input type="submit" value="Enviar"/>
            </form>
        </nav>
    </main>
    
</div>
}


export default Form;