import logo from './logo.svg';
import './App.css';

// Даже если компоненту не передавать аргумент props явно, 
// React автоматически передает компоненту этот аргумент - 
// так говорил Иван Петреченко, но если из аргумента убрать props, React выдает ошибку.

// В props можно передавать все что угодно, даже объекты

function WhoAmI(props) {
  return (
    <div>
      {/* <h1>My name is {props.name.firstName}, surname - {props.surname}</h1> */}
      <h1>My name is {props.name()}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <WhoAmI name={{firstName: 'John'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={{firstName: 'Alex'}} surname="Shepard" link="vk.com"/> */}

      {/* В props можно передавать также и функции */}
      <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={() => {return 'Alex'}} surname="Shepard" link="vk.com"/>
    </div>
  );
}

export default App;
