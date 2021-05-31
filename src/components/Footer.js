import styled from 'styled-components';

const FootContainer = styled.footer `
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: #4DB6AC;
color: #222;
text-align: center;
padding: 5px;
`;

const Footer = () => {    
    return (
        <FootContainer>
        <footer>
              <small>&copy;copyright 2021 BOOK NOOK Inc.</small>
        </footer>
        </FootContainer>
    ); 
}

export default Footer;