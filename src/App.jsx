// /src/components/App.js
import React from 'react';
import Home from './Pages/Home';
import RegistroPonto from './Pages/RegistroPonto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/registro-ponto" component={RegistroPonto} />
                {/* Adicione outras rotas conforme necessário */}
            </Switch>
        </Router>
    );
}

export default App;
