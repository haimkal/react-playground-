import React, { Component } from 'react'

export default class RandomColorSquare extends Component {
    
    
    state = {
        r: this.color(),
        g: this.color(),
        b: this.color()
    }
    
    color() {
        return Math.floor(Math.random()*255);
    }
        
    changeColor = () => {
        const r = this.color();
        const g = this.color();
        const b = this.color();
        this.setState ({r,g,b});
    }

    render() {
        const {r,g,b}= this.state;
        return (
            <div style={{
                background: `rgb(${r},${g}, ${b})`, 
                position: 'absolute', 
                width:'200px',
                height: '200px',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 'auto'
            }} onClick= {this.changeColor}></div>
                
        )}
}
