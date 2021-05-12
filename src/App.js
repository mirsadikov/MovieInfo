import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import GenresScreen from "./screens/GenresScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/about" component={AboutScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/details/:id" component={DetailsScreen} />
      <Route path="/search" component={SearchScreen} />
      <Route path="/genres/:genre" component={GenresScreen} />
      <Route path="/" component={HomeScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
