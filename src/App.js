import logo from './logo.svg';
import './App.css';

import Body from './Components/Body'

function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <h1 className='titleText'>Pathfinding Visualizer</h1>
      </div>
      <Body />
    </div>
  );
}

export default App;
