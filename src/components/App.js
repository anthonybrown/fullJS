import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
//import data from '../testData';

class App extends Component {
  // since we are using stage-2
  // we can use this syntax and use a class property.
  state = {
    pageHeader: 'Naming Contests!',
    contests: []
  };
  //constructor(props) {
    //super(props);
    //this.state = {
      //test: 42
    //}
  //}
  componentDidMount() {
    // used for AJAX, Timers, Listeners
    this.setState({
      contests: data.contests
    });
  }

  componentWillUnmount() {
    // used to clean Timers, Listeners
  }


  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

