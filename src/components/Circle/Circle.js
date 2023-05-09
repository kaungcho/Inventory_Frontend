import React from "react";
import 'animate.css';

const Circle = props => {
    const childStyles = {
        width: '600px',
        textAlign: 'left',
        position: 'absolute',
        top: '50%',
        left: '58%',
        transform: 'translate(-50%, -50%)',
        fontSize : '70px',
        fontWeight : 'bolder'
    }
    const smallCircleStyles = {
        width: '200px',
        height: '200px',
        backgroundColor : '#3ca099',
        position: 'absolute',
        borderRadius: '50%',
        zIndex : 0,
        transform: 'translate(calc(100% - 100px), -455px)'
     }
    const smallCircle2Styles = {
        width: '200px',
        height: '200px',
        backgroundColor : '#3ca099',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 100,
        transform: 'translate(calc(100% + 800px), -500px)'
     }
    const enhanceStyle = {
        color : '#3CA099',
        fontSize: '70px'
    }
    const usStyle = {
        fontSize: '100px',
        color: '#3CA099',
        fontWeight: 'bolder',
        display: 'inline-block',
        paddingLeft: '20px'
        
    }
    const findOut = {
        backgroundColor : '#3CA099',
        display : 'inline-block',
        fontSize: '24px',
        marginLeft : '180px',
        marginTop : '-22px',
        paddingLeft : '10px',
        paddingRight : '10px',
        position : 'absolute',
        color: 'white',
        borderRadius: '3px'
    }
    return (
        <>
            <div style={props.circleStyles}>
                <div style={childStyles}>
                    <span style={enhanceStyle}>Enhance</span> Your <br />Digital Businees <br /> with <div style={usStyle} className='animate__animated animate__heartBeat animate__slower animate__infinite infinite'>US.</div>
                    <br/><p style={findOut}>Find out more</p>
                </div>
            </div>
            <div style={smallCircleStyles}>
            </div>
            <div style={smallCircle2Styles}>
            </div>
        </>
    )
}

export default Circle;