import './App.css';
import {Component}  from 'react';

const Header = () => {
  return <h2>Hello World!!</h2>
}

// const Field = () => {
//   const holder = 'Enter here'
//   const styledField = {
//     width: '300px',
//   }
//   return <input 
//           placeholder = {holder} 
//           type="text" 
//           style={styledField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styledField = {
      width: '300px',
    }
    return <input 
            placeholder = {holder} 
            type="text" 
            style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  const res = () => {
    return 'Enter'
  }
  return <button>{logged ? res() : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
