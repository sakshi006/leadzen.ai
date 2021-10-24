import './App.css';
import Bottom from './components/Bottom/Bottom';
import Footer from './components/Footer/Footer';
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
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
