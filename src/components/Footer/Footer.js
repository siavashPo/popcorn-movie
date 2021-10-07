import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const FooterSite = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>THE BASICS</Heading>
                        <FooterLink href="#">About TMDB</FooterLink>
                        <FooterLink href="#">Contact Us</FooterLink>
                        <FooterLink href="#">Support Forums</FooterLink>
                        <FooterLink href="#">API</FooterLink>
                        <FooterLink href="#">System Status</FooterLink>
                    </Column>
                    <Column>
                        <Heading style={{fontSize:'20px'}}>GET INVOLVED</Heading>
                        <FooterLink href="#"> Contribution Bible</FooterLink>
                        <FooterLink href="#"> 3rd Party Applications</FooterLink>
                        <FooterLink href="#"> Add New Movie</FooterLink>
                        <FooterLink href="#"> Add New TV Show</FooterLink>
                    </Column>
                    <Column>
                        <Heading>LEGAL</Heading>
                        <FooterLink href="#">Terms of Use</FooterLink>
                        <FooterLink href="#">Ahemdabad</FooterLink>
                        <FooterLink href="#">API Terms of Use</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                    </Column>
                    <Column>
                        <Heading>COMMUNITY</Heading>
                        <FooterLink href="#">
                <span style={{marginLeft: "10px"}}>
                  Guidelines
                </span>
                        </FooterLink>
                        <FooterLink href="#">
                <span style={{marginLeft: "10px"}}>
                  Discussions
                </span>
                        </FooterLink>
                        <FooterLink href="#">
                <span style={{marginLeft: "10px"}}>
                  Leaderboard
                </span>
                        </FooterLink>
                        <FooterLink href="#">
                <span style={{marginLeft: "10px"}}>
                  Twitter
                </span>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}

export default FooterSite;