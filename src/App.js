import './App.css';
import Header from './components/Header'
import Weather from './components/Weather/Weather'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
    <div>
     <Header />
     <Weather />
     <Footer />
    </div>
   
    </div>
  );
}

export default App;
