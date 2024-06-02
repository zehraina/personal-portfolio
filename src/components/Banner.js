
import { userState, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/passport_photo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" a Web Developer ", "a Machine Learning Engineer", "a Data Analyst", "a Competitive Coder"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }

        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
            
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animated__animated animate_fadeIn" : ""} >

                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Ina"}<span className="wrap"> {text}</span></h1>
                        <p>I build pretty awesome stuff</p>
                        <button onClick={() => console.log('connect')}><a href="https://drive.google.com/file/d/1iUBCHYHLsAsLB1vF5lr6icclIw7hu7Wq/view?usp=sharing">Want to hire me?</a> <ArrowRightCircle size={25}/></button>
                            </div>
                            }
                        </TrackVisibility>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>

                </Row>
            </Container>
            
        </section>
    )
}