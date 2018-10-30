import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crystal from "./components/Crystal";
import Cryswrap from "./components/Cryswrap";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import Winloss from "./components/Winloss";
import Wrapper from "./components/Wrapper";
import crystals from "./crystal.json";

class App extends Component {
  state = {
    crystals,
    goal: 0,
    score: 0,
    wins: 0,
    losses: 0
  }

  componentDidMount(){
    this.setState({goal: Math.floor(Math.random()*(41-25+1)+25)});
    this.state.crystals.forEach(crystal =>{
      crystal.number = (Math.floor(Math.random()*(7-3+1))+3)
    })
  }

  youWin = () =>{
    alert("You Win!");
    this.setState({score: 0});
    this.setState({wins: this.state.wins+1});
    this.state.crystals.forEach(crystal =>{
      crystal.number = (Math.floor(Math.random()*(7-3+1))+3)
    })
  }

  youLose = () =>{
    alert("You lose!")
    this.setState({score: 0});
    this.setState({losses: this.state.losses+1});
    this.state.crystals.forEach(crystal =>{
      crystal.number = (Math.floor(Math.random()*(7-3+1))+3)
    })
  }
  
    clicker=(number)=>{
   this.setState({score: this.state.score+number})
   setTimeout(()=>{
     if(this.state.score === this.state.goal){
       this.youWin();
     }
     else if(this.state.score > this.state.goal){
       this.youLose();
     }
   }, 100)
  }
  
  render() {
    return (
  <Wrapper>
     <Header/>
       <Instructions/>
       <Cryswrap>
        <Score score = {this.state.score} goal = {this.state.goal}/>
        {this.state.crystals.map(crystal =>(
          <Crystal 
        id={crystal.id}
        key={crystal.id}
        image={crystal.image}
        number={crystal.number}
        click={this.clicker}
        />
        ))}
        </Cryswrap>
        <Winloss wins={this.state.wins} losses={this.state.losses}/>
  </Wrapper>
    );
  }
}

export default App;
