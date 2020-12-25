import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu' 
import MenuItem from './Menu/MenuItem/MenuItem';
import SpecialButton from './SpecialButton/SpecialButton'
import Counter from  './Counter/Counter';
import Toggle from './Toggle/Toggle';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';

function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem route="/">Home</MenuItem>
        <MenuItem route="/about">about</MenuItem>
      </Menu>

      <hr />
      <SpecialButton />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <RandomColorSquare />
    </div>

  );
}

export default App;
