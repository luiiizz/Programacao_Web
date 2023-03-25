import Header from "../Header";
import Footer from "../Footer";
import pesq from "../../assets/images/pesq.png";
import img_menu from "../../assets/images/img-menu.png";


const Menu = () => {

    return <div>
        <Header></Header>

        <main class="container main-content">
        
            <h3 id="main-content-descr">Plataforma para gereciamento de processos com aeronaves</h3>
            
            <div class="menu">
                <div>
                    {/* <!-- Tag para formulario de pesquisa --> */}
                    <form method="get" action="file5.html">
                        <label for="pesq"><strong>O que está procurando?</strong></label>
                        <input type="text" name="pesq" id="pesq"/>
                        <button class="btn btn-dark" type="submit" value="Entrar"><img src={pesq}/></button>
                    </form>
                    
                    <p class="text">
                        <strong>É possível que uma aeronave ande de ré?</strong>
                        Sim, é possível. <br/><br/>Na verdade, os aviões não possuem uma marcha à ré, 
                        mas conseguem se movimentar para trás a partir do uso reverso dos motores, os quais formam uma <br/>concha em sua parte traseira e inverte a direção do fluxo de ar.
                    </p>
                </div>

            {/* <!-- Tag para imagem --> */}
            <img id="men" src={img_menu} alt="img-menu" />

            </div>
        {/* <!-- Tag section para delimitação de bloco--> */}
        <section>

            {/* <!-- Tags table, tr,td para estrutura da tabela --> */}
            <table class="table aero">
                <tr>
                    <td>Nome</td>
                    <td>Capacidade(Pessoas)</td>
                </tr>
                <tr>
                    <td>Boeing 747</td>
                    <td>585 </td>
                </tr>
                <tr>
                    <td>Airbus A380</td>
                    <td>585</td>
                </tr>
                <tr>
                    <td>Airbus A340</td>
                    <td>380  </td>
                </tr>
                <tr>
                    <td>Ilyushin Il-96</td>
                    <td>350 </td>
                </tr>
            </table>

        </section>
        
        </main>
        <Footer/>
    </div>
}

export default Menu;