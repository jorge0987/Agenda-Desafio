import NavBar from '../NavBar';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    background-color: #1C1C1C	;
`

function Header() {
    return(
        <Nav>
            <NavBar />
        </Nav>
    )
}

export default Header;