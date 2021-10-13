import {useContext} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../../sasset/image/logo.svg'
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import {Menu, Dropdown, Avatar} from 'antd';
import imgSrc from "../../helper/image";
import login from "../../services/login";

function Header() {
    const {user, logout} = useContext(UserContext)
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3" onClick={logout}>Logout</Menu.Item>
        </Menu>
    )

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link style={{color: 'yellow', textDecoration: 'none'}} to={'/'}>Popcorn
                    Movies</Link></Navbar.Brand>
                <Navbar.Brand><Link to={'/'}><img alt='logo' style={{width: '50px'}} src={logo}/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Movies" id="collasible-nav-movies">
                            <NavDropdown.Item>
                                <Link to='/movie/popular' style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                }}>
                                    Popular
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link to='/Now Playing' style={{textDecoration: 'none', color: 'black'}}>Now
                                Playing</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/Top Rated' style={{textDecoration: 'none', color: 'black'}}>Top
                                Rated</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/Upcoming' style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>Upcoming</Link></NavDropdown.Item>
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
                        {user ? (
                                <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
                                    <Avatar src={imgSrc(user.avatar.tmdb.avatar_path, 'w185')}/>
                                </Dropdown>
                            ) :
                            <Nav.Link>
                                <div onClick={login} style={{textDecoration: 'none', color: 'white'}}>Login/Sign
                                    Up
                                </div>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header