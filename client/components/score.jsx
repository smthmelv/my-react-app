/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './score.css';
import axios from 'axios';
import Button from './button.jsx';

// const GIT_USER = 'dhh';
// const GIT_USER_URL = `https://api.github.com/users/dhh/events`;

class Score extends Component {
  constructor(){
    super();

    this.state = {
      data: [],
      score: 0
    }

    this.printScore = this.printScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    // axios.get(GIT_USER_URL)
    //   .then(result => this.setState({
    //     data: result.data.map(elem => {
    //       return elem.type
    //     }),
    //     isLoading: false
    //   }))
    //   .catch(error => this.setState({
    //     error,
    //     isLoading: false
    //   }));
  }

  printScore(data) {
    const { isLoading } = this.state;
    let score = 0;

    !isLoading && data.forEach(elem => {
      switch(elem){
        case "PushEvent":
          score += 5;
          break;
        case "PullRequestReviewCommentEvent":
          score += 4;
          break;
        case "WatchEvent":
          score += 3
          break;
        case "CreateEvent":
          score += 2
          break;
        default:
          score += 1
          break;
      }
    })

    this.setState({
      score
    });
  }

  resetScore() {
    let score = 0;

    this.setState({
      score
    });
  }

  render() {
    const { data, score } = this.state;

    return (
      <div className="App">
        <div className="App_score">
          {score === 0 ? "n/a" : score}
        </div>
        <Button type="button" className="App_button" children="Get Score" onClick={this.printScore} data={data}/>
        <br/>
        <Button type="button" className="App_button_reset" children="Reset Score" onClick={this.resetScore}/>
      </div>
    );
  }
}

export default Score;