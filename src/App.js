import './App.css';
import './components/Home/Home';
import Home from "./components/Home/Home";
import Cadastrar from "./components/Cadastro/Cadastrar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/cadastrar" component={Cadastrar}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
