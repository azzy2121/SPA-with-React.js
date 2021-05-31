import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import Logo from '.././assets/logo.png';

const HeadContainer = styled.header `
background-color: #4DB6AC;
`;

const Header = () => {
    return (
        <HeadContainer>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width="50" height="70" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
                <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav ">
                       <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                       <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                       <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
        </HeadContainer>
    );
}

export default Header;