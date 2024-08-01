import logo from './logo.svg';
import './App.css';
import { AlertBox } from './components/AlertBox';
import BadgeExample from './components/BadgeExample';
import { ButtonExample } from './components/ButtonExample';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="App">
     {/* React-bootstarp app */}
     {/* <BadgeExample/> */}
     {/* <AlertBox/> */}
     <ButtonExample/>
     <Canvas/>
    </div>
  );
}

export default App;
