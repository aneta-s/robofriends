import React, { Component } from "react";
import { Helmet } from "react-helmet";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { robots } from "../containers/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  componentDidMount() {
    this.setState({ robots: robots });
    console.log("componentDidMount");
  }
  /*   componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState ({robots: users })});
  } */

  /* OR componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }  */

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Helmet>
          {/* HTML Meta Tags */}
          <title>React app Robofriends from scratch.</title>
          <meta
            name="description"
            content="Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.
Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM."
          />
          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="React app Robofriends from scratch." />
          <meta
            itemProp="description"
            content="Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.
Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM."
          />
          <meta
            itemProp="image"
            content="https://imgur.com/nMjDh3g"
          />
          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://aneta-s.github.io/robofriends/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="React app Robofriends from scratch."
          />
          <meta
            property="og:description"
            content="Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.
Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM."
          />
          <meta
            property="og:image"
            content="https://imgur.com/nMjDh3g"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="React app Robofriends from scratch."
          />
          <meta
            name="twitter:description"
            content="Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.
Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM."
          />
          <meta
            name="twitter:image"
            content="https://imgur.com/nMjDh3g"
          />
          {/* Meta Tags Generated via http://heymeta.com */}
        </Helmet>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
