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
        <Link to="/tables"><a href="file3.html">Tables</a></Link>
        <Link to="/images"><a href="file4.html">Images</a></Link>
        <Link to="/menu"><a href="file5.html">Menu</a></Link>
    </nav>

    </div>
}


export default Header;