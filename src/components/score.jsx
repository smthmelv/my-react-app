import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from './common/button.jsx';
import './score.css';

class Score extends Component {
  constructor(){
    super();

    this.state = {
      score: 0
    }

    this.printScore = this.printScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  printScore(data) {
    let score = 0;

    data.forEach(elem => {
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
    const { score } = this.state;
    const { types } = this.props;

    return (
      <div className="Score_App">
        <Container>
          <Row>
            <Col>
              <p className="App_score_txt_header">Score is added up by types that come back from data:<br/></p>
              <p className="App_score_txt">
                PushEvent <span className="App_score_pts">5pts</span><br/>
                PullRequestReviewCommentEvent <span className="App_score_pts">4pts</span><br/>
                WatchEvent <span className="App_score_pts">3pts</span><br/>
                CreateEvent <span className="App_score_pts">2pts</span><br/>
                All other types <span className="App_score_pts">1pt</span>
              </p>
            </Col>
            <Col>
              <div className="App_score">
                {score === 0 ? "n/a" : score}
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <Button type="button" className="App_button" children="Get Score" onClick={this.printScore} data={types}/>
        <br/>
        <Button type="button" className="App_button_reset" children="Reset Score" onClick={this.resetScore}/>
      </div>
    );
  }
}

export default Score;