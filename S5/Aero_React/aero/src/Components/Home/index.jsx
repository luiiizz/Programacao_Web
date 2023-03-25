import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
    return <div>
    
    <Header/>

    <main className="container main-content">

        <h3 id="main-content-descr">Plataforma para gereciamento de processos com aeronaves</h3>

        {/* <!-- Tag para legenda--> */}
        <label for="curiosidade"><strong>Curiosidades</strong></label><br/>

        {/* <!-- Tag para paragrafo --> */}
        <ol className="list-group">
            <li><strong>As luzes internas se apagam para preparar para um acidente</strong><br/>
                Sim, é isso mesmo. Por mais que acidentes aéreos sejam raríssimos, os procedimentos de segurança são pensados sempre no pior cenário, 
                por isso as luzes se apagam quando o avião se aproxima da aterrissagem e durante quase todo o voo.
            </li>
            <li><strong>O oxigênio nas máscaras só dura 15 minutos</strong><br/>
                Se a cabine despressurizar, máscaras de oxigênio cairão automaticamente, puxe as tiras para ajustar, prenda sua máscara cobrindo nariz e a boca e respire normalmente.
                Não se preocupe, esse tempo é mais que suficiente para que o piloto diminua a altitude da aeronave até uma altura que seja segura e as pessoas consigam respirar.
            </li>
            <li><strong>Tem sarcófago em algumas aeronaves</strong><br/>
                Fique tranquilo, o avião não está voando por aí carregando uma múmia dentro. Sarcófago é o nome dado ao local secreto destinado ao descanso de aeromoças e pilotos.
                É onde eles fazem pequenos revezamentos para descansos em voos longos.
            </li>
        </ol>
    
    </main>

    <Footer/>
</div>
}


export default Home;