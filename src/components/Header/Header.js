import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../../sasset/image/logo.svg'
import {Link} from "react-router-dom";
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link style={{color:'yellow', textDecoration:'none'}} to={'/'}>Popcorn Movies</Link></Navbar.Brand>
                <Navbar.Brand><Link to={'/'}><img alt='logo' style={{width:'50px'}} src={logo} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Movies" id="collasible-nav-movies">
                            <NavDropdown.Item ><Link to='/movie/popular' style={{textDecoration:'none', color:'black'}}>Popular</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Now Playing' style={{textDecoration:'none', color:'black'}}>Now Playing</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Top Rated' style={{textDecoration:'none', color:'black'}}>Top Rated</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/Upcoming' style={{textDecoration:'none', color:'black'}}>Upcoming</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tv Shows" id="collasible-nav-tvShows">
                            <NavDropdown.Item>Popular</NavDropdown.Item>
                            <NavDropdown.Item>Airing Today</NavDropdown.Item>
                            <NavDropdown.Item>On Tv</NavDropdown.Item>
                            <NavDropdown.Item>Top Rated</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="People" id="collasible-nav-people">
                            <NavDropdown.Item>Popular People</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="More" id="collasible-nav-more">
                            <NavDropdown.Item>Discussions</NavDropdown.Item>
                            <NavDropdown.Item>Leaderboard</NavDropdown.Item>
                            <NavDropdown.Item>Support</NavDropdown.Item>
                            <NavDropdown.Item>API</NavDropdown.Item>
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