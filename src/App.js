import React, { Component } from 'react';
import Button from "./Button";
import flag from './download.png'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Team: 'INDIA',
      Batsman1: '',
      Score1:'',
      Batsman2:'',
      Score2:'',
      TeamScore:'',
      Overs:'',
      author:'',
      text:''
    };
  }
  handleTeamChange(event){
    console.log(event.target);
  }
  handleBatsman1Change(event){ 
    this.setState({
    Batsman1: event.target.value
    })
  }
  handleScore1Change(event){ 
    this.setState({
    Score1: event.target.value
    })
  }
    handleBatsman2Change(event){ 
      this.setState({
      Batsman2: event.target.value
      })
    }
    handleScore2Change(event){ 
      this.setState({
      Score2: event.target.value
      })
    }
    handleTeamScoreChange(event){ 
      this.setState({
      TeamScore: event.target.value
      })
    }
    handleOversChange(event){ 
      this.setState({
      Overs: event.target.value
      })
    }
    handleAuthorChange(e) {
      this.setState({author: e.target.value});
    }
    handleTextChange(e) {
      this.setState({text: e.target.value});
    }
    handleSubmit(e) {
      e.preventDefault();
      var author = this.state.author.trim();
      var text = this.state.text.trim();
      if (!text || !author) {
        return;
      }
    }
  render() {
    return (
      <div className="App">
        < div className="box">
          <header className="App-header">
            <img src={flag} className="App-logo" alt="logo" />
            <h1 className="App-title" type="text" >MATCH</h1>
          </header>
          <center> <Button buttonName = 'TEAM'/>  <input className=" field1" type="text" id="me" value={this.state.Team} onChange={(event) => this.handleTeamChange(event)}/>
          </center>
          <br />
          <center> <Button buttonName = 'Batsman1'/>  <input className="field1" type="text" id="me" value={this.state.Batsman1} onChange={(event) => this.handleBatsman1Change(event)}/>
          </center>
          <br />
          <center> <Button buttonName = 'Score1'/>    <input className="field1" type="text" id="me" value={this.state.Score1} onChange={(event) => this.handleScore1Change(event)}/>
          </center>
          <br />
          <center><Button buttonName = 'Batsman2'/>  <input className="field1" type="text" id="me" value={this.state.Batsman2} onChange={(event) => this.handleBatsman2Change(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'Score2'/>    <input className="field1" type="text" id="me" value={this.state.Score2} onChange={(event) => this.handleScore2Change(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'TeamScore'/> <input className="field1" type="text" id="me" value={this.state.TeamScore} onChange={(event) => this.handleTeamScoreChange(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'Overs'/>    <input className="field1" type="text" id="me" value={this.state.Overs} onChange={(event) => this.handleOversChange(event)}/>
          </center>
          <br/>
        </div>   
         
        <form className="field1" onSubmit={(event)=>this.handleSubmit()}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={(event)=>this.handleAuthorChange(event)}/>
        <input
          type="text" placeholder="Say something..." value={this.state.text}
          onChange={(event)=>this.handleTextChange(event)} />
        <input type="submit" value="Post" />
      </form>

    <br/>
    <br/>
    < div className="box">
          <header className="App-header">
            <img src={flag} className="App-logo" alt="logo" />
            <h1 className="App-title" type="text" >MATCH</h1>
          </header>
          <center> <Button buttonName = 'TEAM'/>  <input className=" field1" type="text" id="me" value={this.state.Team} onChange={(event) => this.handleTeamChange(event)}/>
          </center>
          <br />
          <center> <Button buttonName = 'Batsman1'/>  <input className="field1" type="text" id="me" value={this.state.Batsman1} onChange={(event) => this.handleBatsman1Change(event)}/>
          </center>
          <br />
          <center> <Button buttonName = 'Score1'/>    <input className="field1" type="text" id="me" value={this.state.Score1} onChange={(event) => this.handleScore1Change(event)}/>
          </center>
          <br />
          <center><Button buttonName = 'Batsman2'/>  <input className="field1" type="text" id="me" value={this.state.Batsman2} onChange={(event) => this.handleBatsman2Change(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'Score2'/>    <input className="field1" type="text" id="me" value={this.state.Score2} onChange={(event) => this.handleScore2Change(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'TeamScore'/> <input className="field1" type="text" id="me" value={this.state.TeamScore} onChange={(event) => this.handleTeamScoreChange(event)}/>
          </center>
          <br/>
          <center> <Button buttonName = 'Overs'/>    <input className="field1" type="text" id="me" value={this.state.Overs} onChange={(event) => this.handleOversChange(event)}/>
          </center>
          <br/>
        </div>  
      </div> 
      )
      }
};



export default App;
