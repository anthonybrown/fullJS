import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests!',
    contests: this.props.initialContests
  };
  componentDidMount() {
    // ajax call..
    axios.get('/api/contests')
      .then(response => {
        this.setState({
          contests: response.data.contests
        });
      })
      .catch(console.error)
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

