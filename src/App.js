import './App.css';
import Home from './pages/Home';
import AppBarR from './Components/AppBar';
import ResponsiveAppBar from './Components/AppBar';
import Zapatos from './pages/Zapatos';

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Zapatos></Zapatos>
    </>
  );
}

export default App;
