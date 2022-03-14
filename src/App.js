import logo from './logo.svg';
import './App.css';
import Gsap from './components/gsap';
import Gsapad from './components/gsapad';

function App() {
  return (
    <div className='main'>
      <h1>Basic animations using Gsap</h1>
     <Gsap/>
     <h1>Slightly advanced animations</h1>
     <Gsapad/>
    </div>
  );
}

export default App;
