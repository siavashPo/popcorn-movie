import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../../sasset/image/logo.svg'
import {Link} from "react-router-dom";
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link style={{color:'yellow'}} to={'/'}>Popcorn Movies</Link></Navbar.Brand>
                <Navbar.Brand><Link to={'/'}><img alt='logo' style={{width:'50px'}} src={logo} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Movies" id="collasible-nav-movies">
                            <NavDropdown.Item ><Link to='/popular'>Popular</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Now Playing'>Now Playing</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Top Rated'>Top Rated</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Upcoming'>Upcoming</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tv Shows" id="collasible-nav-tvShows">
                            <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Airing Today</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">On Tv</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="People" id="collasible-nav-people">
                            <NavDropdown.Item href="#action/3.1">Popular People</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="More" id="collasible-nav-more">
                            <NavDropdown.Item href="#action/3.1">Discussions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Leaderboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">API</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header