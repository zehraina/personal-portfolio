import { Container } from "react-bootstrap"
import { MailchimpForm } from "./MailChimpForm"
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Row, Col } from "react-bootstrap";
export const Footer = () => {
    
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                         <a href="https://www.linkedin.com/in/ina-zehra-6b7369222/"><img src={navIcon1} alt=""/></a>
                            <a href="https://www.instagram.com/zehraina/"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.facebook.com/profile.php?id=100015266913562"><img src={navIcon3} alt=""/></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}