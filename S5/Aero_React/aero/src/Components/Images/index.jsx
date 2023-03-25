import Header from "../Header";
import Footer from "../Footer";
import Boeing from "../../assets/images/Boeing.png";
import AirbusA380_2 from "../../assets/images/AirbusA380_2.png";
import Antonov from "../../assets/images/Antonov.png";

const Images = () => {

    return <div>
        <Header></Header>

        <main class="container main-content padd">
        {/* <!-- Tag section para delimitação de bloco--> */}

        <section id="sec-images">
            <div>
            <h4 id="main-title" >Aeronaves</h4>

                {/* <!-- Tag label - Legendas descritivas para imagens --> */}
                <label for="logo"> Boeing 747</label>
                <p class="text">Boeing 747 é uma aeronave a jato usada no âmbito civil e militar para transporte de passageiros e de carga, 
                    referida com frequência como Jumbo Jet ou Queen of the Skies (Rainha dos Céus).
                </p>
                {/* <!-- Tag  img para retorno de imagens, com seus repectivos atributos --> */}
                <img class="img-fluid rounded-circle" src={Boeing}alt="logo" height="200" align="center"/><br/>

                <label for="airbus"> Airbus A380</label>
                <p class="text">O Airbus A380 é uma aeronave widebody quadrimotor a jato para o transporte de passageiros, fabricado pela EADS Airbus.
                     É o maior avião comercial do mundo. Os aeroportos em que opera tiveram suas instalações adaptadas para acomodá-lo com segurança.
                </p>
                <img class="img-fluid rounded-circle" src={AirbusA380_2} alt="airbus" height="200" align="center"/><br/><br/><br/>

                <label for="tpng"> Antonov AN-225 </label>
                <p class="text">
                    O Antonov An-225 Mriya, chamado pela OTAN de Cossack, foi uma aeronave de transporte cargueiro estratégica, a qual foi produzida durante a década de 1980 pela Antonov Design Bureau, 
                    na então RSS Ucraniana (atualmente, na Ucrânia). O Antonov An-225 Mriya era a maior aeronave de asa fixa do mundo. 
                </p>
                <img class="img-fluid rounded-circle" src={Antonov}alt="tpng" height="200" align="center"/><br/>
            </div>
            
            {/* <!-- <img id="aer-lateral" src="/assets/images/lateral-page.png" alt="Aeronave-lateral" height="200" align="center"/> --> */}
        </section>

       

    </main> 
    <Footer/>
    </div>
}

export default Images;