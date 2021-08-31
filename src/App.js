import './App.scss';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Creation from "./components/creation/Creation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Creation/>
      <Footer/>
    </div>
  );
}

export default App;
