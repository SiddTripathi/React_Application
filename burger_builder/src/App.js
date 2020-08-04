import React, { Component } from 'react';

import Layout from './Components/Layout/Layout'
import rootclass from './index.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <Layout className={rootclass.body}>
          <p>Testing 1 2 3</p>
        </Layout>
      </div>
    )
  }
}

export default App;
