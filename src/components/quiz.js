import React, {Component} from 'react'
import QuizProblems from './quiz-problems'
import QuizResults from './quiz-results'

export default class Quiz extends Component {
  state = {
    selectedAnswers: [],
    submitted: false
  }

  render() {
    const {submitted, selectedAnswers} = this.state
    return submitted ? (
      <QuizResults />
    ) : (
      <QuizProblems selectedAnswers={selectedAnswers} />
    )
  }
}
