import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './pages/splash';
import Home from './pages/home/home';
import Layout from 'app/layout/layout';

// import './App.css';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // setTimeout(() => this.setState({isLoading: false}), 1000);
    this.setState({isLoading: false})
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Splash />
    ) : (
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <div id="router-wrapper">
            <Route exact path="/" component={Home} />
            {/* <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
      </Layout>
    );
  }
}

;
