import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Charlist from './CharComponent/CharComponent'

class App extends Component {
  state = {
    longitdEsc : ''
  }
  outputsLength = (event) =>{
    this.setState({longitdEsc: event.target.value})
  }
  deletLetras = (index) =>{
    const letras = this.state.longitdEsc.split('');
    letras.splice(index,1);
    const nuevaLetra = letras.join('');
    this.setState({longitdEsc:nuevaLetra});
  }
  render() {
    const listaChar = this.state.longitdEsc.split('').map((lis, index) => {
      return <Charlist letra={lis} key={index} delet={() => this.deletLetras(index)} />
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.outputsLength} value={this.state.longitdEsc} />
        <p>Longitud del escrito : {this.state.longitdEsc}</p>
        <ValidationComponent long={this.state.longitdEsc.length} />
        {listaChar}
      </div>
    );
  }
}

export default App;
