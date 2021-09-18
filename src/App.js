import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import Home from "./Home";
import Post from "./Post";
import About from "./About";
import NotFound from "./notFound";
import  Navigation  from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./test";




function App() {
  return (
    
      <BrowserRouter>
      <div className="container">
       
      <Navigation />
      <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/home">
    <Redirect to="/" />
    </Route>
    <Route path="/Post" exact component={Post}/>
    <Route path="/Post/:id" component={View}/>
    <Route path="/about" component={About}/>
    
    <Route path="*" component={NotFound} />
    
  </Switch>
  </div>
      </BrowserRouter>
    
  );
}

export default App;
