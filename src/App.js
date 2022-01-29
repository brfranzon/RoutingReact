import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Personagens from './componentes/personagens';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/">
          <h1> Winter is coming....</h1>
          <button>
            <Link to="/personagens">Vamos ver os personagens...</Link>
          </button>
        </Route>

        <Route exact path="/personagens">
          <Personagens />
        </Route>

        {/* redirecionar rota */}
        {/* <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}

        {/* <Route exact path="/">
          <h1 style={{ border: "2px solid red" }}>Meu início</h1> */}

        {/* const history = useHistory() */}
        {/* <button>
            <Link to="/rota1">Vai para rota 1</Link>
          </button> */}
        {/* </Route> */}

        {/* <Route exact path="/rota1"> */}
        {/* conteúdo */}
        {/* <h1 style={{ border: "2px solid green" }}>
            Aqui eu tenho a minha rota 1.
          </h1> */}
        {/* </Route> */}

        {/* <Route exact path="/rota2"> */}
        {/* <h1 style={{ border: "2px solid blue" }}>
            Aqui eu tenho a minha rota 2.
          </h1> */}
        {/* </Route> */}

        {/* <Route exact path="/rota1/:id"> */}
        {/* <h1 style={{ border: "2px solid blue" }}>
            Aqui eu tenho a minha rota 1 com parametro...
          </h1> */}
        {/* </Route> */}

        {/* corpo */}
        {/* <h1 style={{ border: "2px solid green" }}>Meu início</h1>

        <h1 style={{ border: "2px solid green" }}>
          Aqui eu tenho um 1 pedaco de html.
        </h1> */}
      </div>
    </Router>
  );
}

export default App;
