import Header from "../Header";
import Footer from "../Footer";

import './style3.css';

const Tables = () => {

    return <div>

        <Header></Header>

        <main className="container main-content">
        {/* <!-- Tag nav para delimitação de bloco--> */}
        <nav>
            <h4 id="main-title">Informações sobre Voos</h4>

            {/* <!-- Tag table para marcação de tabela --> */}
            <table className="table main-content-voo">
                {/* <!-- Tag thead para bloco de cabecalho/ tr para lihas/ td para colunas --> */}
                <thead className="thead-dark">
                    <tr>
                        <th>Codigo-Voo</th>
                        <th>Aeroporto</th>
                    </tr>
                </thead>
                
                {/* <!-- Tag tdbody para bloco do corpo da tabela --> */}
                <tdbody>
                    <tr>
                        <td>002</td>
                        <td>Recife Airport</td>
                    </tr>
                    <tr>
                        <td>005</td>
                        <td>Fortaleza Airport</td>
                    </tr>
                </tdbody>

                {/* <!-- Tag tfoot para bloco de rodape --> */}
                <tfoot>
                    <tr>
                        <td colspan="3" align="center">T1</td>
                    </tr>
                </tfoot>
            </table>

            <br/><br/>
            <table className="table main-content-aeronave">
                <thead>
                    <tr>
                        <th>Companhia Aérea</th>
                        <th>Aeronave</th>
                    </tr>
                </thead>
                
                <tdbody>
                    <tr>
                        <td>Latam</td>
                        <td>Airbus A380</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>Boeing 777</td>
                    </tr>
                </tdbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="center">T2</td>
                    </tr>
                </tfoot>
            </table>

            <br/><br/>
            <table className="table main-content-ori">
                <thead>
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                    </tr>
                </thead>
                
                <tdbody>
                    <tr>
                        <td>Brasília-DF</td>
                        <td>Recife-PE</td>
                    </tr>
                    <tr>
                        <td>Fortaleza-CE</td>
                        <td>São Paulo-SP</td>
                    </tr>
                </tdbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="center">T3</td>
                    </tr>
                </tfoot>
            </table>
        </nav>
    </main>

    <Footer/>

    </div>
}

export default Tables;