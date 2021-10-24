import './App.css';
import Header from './components/Header/Header';
import Middle1 from './components/Middle1/Middle1';
import Middle2 from './components/Middle2/Middle2';
import Middle3 from './components/Middle3/Middle3';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Header/>
      <Middle1/>
      <Middle2/>
      <Middle3/>
    </div>
  );
}

export default App;
