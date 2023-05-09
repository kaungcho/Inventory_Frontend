import React from "react";
import 'animate.css';
import businessManImage from '../../images/business-man.jpeg';
import './Circle2.css'


const CircleTwo = props => {
    const childStyles = {
        textAlign: 'left',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize : '50px',
        fontWeight : 'bolder'
    }
    const smallCircleStyles = {
        width: '200px',
        height: '200px',
        backgroundColor : '#F9A719',
        position: 'absolute',
        borderRadius: '50%',
        zIndex : 0,
        transform: 'translate(-5px, -615px)'
     }
    const smallCircle2Styles = {
        width: '200px',
        height: '200px',
        backgroundColor : '#F9A719',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 100,
        transform: 'translate(900px, -350px)'
     }
    const smallCircle3Styles = {
        width: '300px',
        height: '300px',
        backgroundColor : '#F9A819',
        position: 'absolute',
        transform: 'translate(-110px,-515px)',
        borderRadius: '50%',
        zIndex: 100,
        backgroundImage: `url(${businessManImage})`,
        backgroundSize: 'cover',
     }
    const enhanceStyle = {
        color : '#3CA099',
        fontSize: '60px'
    }
    const usStyle = {
        fontSize: '100px',
        color: '#3CA099',
        fontWeight: 'bolder',
        display: 'inline-block',
        position: 'absolute',
        paddingLeft: '20px',
        
    }
    return (
        <>
            <div className="circle-2" style={props.circleStyles}>
                <div style={childStyles}>
                    <p>TEN Engineering & Services Pte Ltd (TENES) provides cost effective digital solutions and innovative technology consultancy. The team develops customized software applications to transform work processes with digital-based approaches</p>
                    <p>Established in 2018 with a vision to build a brand of service excellence and provide cost-effective digital solutions to a various sectors. TENES started its digital transformation offerings with niche solution for all industries. The company initiated digitally innovative solutions to handle new and customized projects of all size, environments, and complexities to various sectors.</p>
                </div>
                <div className="about-us">
                    <h3>About</h3>
                    <h1>US.</h1>
                    <h4>Find out more</h4>
                </div>
            </div>
            <div style={smallCircleStyles}>
            </div>
            <div style={smallCircle2Styles}>
            </div>
            <div style={smallCircle3Styles}>
            </div>
            
        </>
    )
}

export default CircleTwo;