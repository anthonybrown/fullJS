import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  // since we are using stage-2
  // we can use this syntax and use a class property.
  state = {
    pageHeader: 'Naming Contests!'
  };
  //constructor(props) {
    //super(props);
    //this.state = {
      //test: 42
    //}
  //}
  componentDidMount() {
    // used for AJAX, Timers, Listeners
  }

  componentWillUnmount() {
    // used to clean Timers, Listeners
  }


  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contests =>
            <ContestPreview {...contests} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

