import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return <div class="navbar header">

    {/* <!-- Tag para imagem --> */}
    <img src={Logo} alt="logo" class="header-image" /><br/>
        
    {/* <!-- Tag para titulo --> */}
    <h1 id="header-title">Processos Aeronáuticos</h1>

    {/* <!-- Tag de lista não ordernada --> */}
    <nav class="d-flex align-items-center header-links">
        <Link to="/"><a href="file2.html">Home </a></Link>
        <Link to="/form"><a href="file2.html">Form </a></Link>
        <a href="file3.html">Tables</a>
        <a href="file4.html">Images</a>
        <a href="file5.html">Menu</a>
    </nav>

    </div>
}


export default Header;