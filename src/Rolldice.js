import React, { Component } from 'react';
import Die from './Die';
import './Rolldice.css';

class Rolldice extends Component {
    static defaultProps={
        sides:["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state={
           die1:'one',
           die2:'one',
           rolling:false
        }
    }

    handleclick(){
        var newDie1=this.props.sides[Math.floor(Math.random()*6)];
        var newDie2=this.props.sides[Math.floor(Math.random()*6)];
        this.setState({
            die1:newDie1,
            die2:newDie2,
            rolling:true
        })
        setTimeout(() => {
            this.setState({
                rolling:false
            })
        }, 300);
    }
    
    render() {
        return (
            <div className="Rolldice">
               <Die face={this.state.die1} /> 
               <Die face={this.state.die2} /> 
               <br/>
               <button onClick={()=>this.handleclick()} disabled={this.state.rolling}>
                   {this.state.rolling ? 'Rolling...' : 'Roll The Dice'}
                   </button>
            </div>
        );
    }
}

export default Rolldice;
