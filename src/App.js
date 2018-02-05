import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Introduce from './components/Introduce/Introduce';
import Sentences from './components/Sentences/Sentences';
import NewSentence from './containers/Sentences/Sentences';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/sentences" component={Sentences} />
          <Route path="/new" component={NewSentence} />
          <Route path="/" exact component={Introduce} />  
        </Layout>
      </div>
    );
  }
}

export default App;