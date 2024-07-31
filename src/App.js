
import './estilos/style.css';
import Header from './componentes/header';
import Sidebar from './componentes/sidebar';
import Nav from './componentes/nav';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Nav/>
      <div>
        <Sidebar/> 
      </div> 
    </div>
  );
}

export default App;
