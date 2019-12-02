import React from 'react';
import { StartPage } from './components/StartPage'
import { QuizPage } from './components/QuizPage'
import './App.css';
import { ScorePage } from './components/ScorePage';
import { AddScore } from './components/AddScore'
import { ViewScore } from './components/ViewScore'
import QuizData from './question.json'


class App extends React.Component {

  state = {
    startPage: true,
    scorePage: false,
    showQuiz: false,
    resultScore: 0,
    showQuestion: {},
    counter: 0,
    viewCounter: 1,
    isClicked: false,
    showError: false,
    selectedAns: '',
    nickname:'',
    showPopup: false,
    viewPopup: false,
    results: {}
  }

  togglePlay = (evt) => {
    evt.preventDefault()
    this.setState({
      startPage: !this.state.startPage,
      showQuiz: !this.state.showQuiz,
      showQuestion: QuizData[this.state.counter]

    })
  }
  toggleAnswer = (picked, answer) => {
    if (picked === answer && !this.state.isClicked) {
      this.setState({
        resultScore: this.state.resultScore + 1,
        counter: this.state.counter + 1,
        isClicked: true
      })

    } else if (picked !== answer && !this.state.isClicked) {
      this.setState({
        counter: this.state.counter + 1,
        isClicked: true
      })
    } else if (picked === answer && this.state.isClicked && answer !== this.state.selectedAns) {
      this.setState({
        resultScore: this.state.resultScore + 1,
      })
    } else if (picked !== answer && this.state.isClicked && answer === this.state.selectedAns) {
      this.setState({
        resultScore: this.state.resultScore - 1,
      })
    }

    this.setState({
      showError: false,
      selectedAns: picked
    })



  }
  toggleNext = (evt) => {
    evt.preventDefault()
    if (this.state.counter < 5) {
      this.setState({

        showQuestion: QuizData[this.state.counter],
        isClicked: false,
        selectedAns: ''
      })
    } else {
      this.setState({
        showQuiz: !this.state.showQuiz,
        scorePage: !this.state.scorePage
      })
    }
    if (this.state.isClicked) {
      this.setState({
        viewCounter: this.state.viewCounter + 1,
        showError: false
      })
    }
    else {
      this.setState({
        showError: true
      })
    }
  }
  toggleStartPage = (evt) => {
    evt.preventDefault()
    this.setState({
      startPage: true,
      scorePage: false,
      showQuiz: false,
      resultScore: 0,
      showQuestion: {},
      counter: 0,
      viewCounter: 1,
      isClicked: false,
      showError: false,
      selectedAns: ''

    })
  }
  handleInput = (evt) => {
    this.setState({
      nickname: evt.target.value
    })
  }
  toggleSave = (evt) => {
    evt.preventDefault()
      localStorage.setItem(this.state.nickname, this.state.resultScore)
    this.setState({
        results: localStorage,
        showPopup: !this.state.showPopup,
        nickname:''
        
    })

  }
  togglePopup = (evt) => {
    evt.preventDefault()
    this.setState({
      showPopup: !this.state.showPopup,
      
    })
  }
  toggleView = (evt) => {
    evt.preventDefault()
    this.setState({
      results: localStorage,
      viewPopup: !this.state.viewPopup
    })
  }



  render() {
    return (
      <div className="App">
        {this.state.startPage ? <StartPage togglePlay={this.togglePlay} /> : null}
        {this.state.showQuiz ? <QuizPage
          showQuestion={this.state.showQuestion}
          toggleAnswer={this.toggleAnswer}
          toggleNext={this.toggleNext}
          viewCounter={this.state.viewCounter}
          showError={this.state.showError}
          selectedAns={this.state.selectedAns} /> : null}
        {this.state.scorePage ? <ScorePage resultScore={this.state.resultScore}
          toggleStartPage={this.toggleStartPage} 
          toggleSave={this.toggleSave}
          togglePopup={this.togglePopup}
          toggleView={this.toggleView}/> : null}
        <AddScore toggleSave={this.toggleSave}
        showPopup={this.state.showPopup}
        handleInput={this.handleInput}
        togglePopup={this.togglePopup}/> 
        <ViewScore toggleView={this.toggleView}
        viewPopup={this.state.viewPopup}
        results={this.state.results}/> 

      </div>
    );
  }

}

export default App;
