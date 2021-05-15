import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import GenresScreen from "./screens/GenresScreen";
import TVShowDetailsScreen from "./screens/TVShowDetailsScreen";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/details/movie/:id" component={MovieDetailsScreen} />
        <Route path="/details/tv/:id" component={TVShowDetailsScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/genres/:genre" component={GenresScreen} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="*" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
