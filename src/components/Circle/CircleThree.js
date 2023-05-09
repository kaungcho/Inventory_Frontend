import React from "react";
import 'animate.css';
import './Circle3.css';

const CircleThree = props => {
    const childStyles = {
        textAlign: 'left',
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize : '50px',
        fontWeight : 'bolder'
    }
    const smallCircle2Styles = {
        width: '200px',
        height: '200px',
        backgroundColor : '#3CA099',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 100,
        transform: 'translate(870px, -350px)'
     }
     const items = ['E-commerce Development' , 'Website Design and Development', 'Digital Markrting', 'Branding / Video content creation ']
    return (
        <>
            <div className="circle-3" style={props.circleStyles}>
                <div style={childStyles}>
                    <h2>We Offer a plethora <br /> of digital expertises.</h2>
                    <hr></hr>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="what-we-do">
                    <p className="p-1">What do</p>
                    <p className="p-2">we do?</p>
                </div>
            </div>
            <div style={smallCircle2Styles}>
            </div>
           
        </>
    )
}

export default CircleThree;