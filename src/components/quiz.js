/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {createRef, Component} from 'react'
import QuizProblems from './quiz-problems'
import QuizResults from './quiz-results'

export default class Quiz extends Component {
  state = {
    selectedAnswers: [],
    submitted: false
  }

  constructor(props) {
    super(props)
    this.problemsWrapper = createRef()
  }

  submit = () => {
    this.setState({
      submitted: true
    })
  }

  setAnswer = ({index, answer}) => () => {
    this.setState(({selectedAnswers}) => {
      const newAnswers = [...selectedAnswers]
      newAnswers[index] = answer
      return {
        selectedAnswers: newAnswers
      }
    })
  }

  getSnapshotBeforeUpdate(_, prevState) {
    if (prevState.selectedAnswers.length < this.state.selectedAnswers.length) {
      console.log(
        this.problemsWrapper.current.offsetTop +
          this.problemsWrapper.current.offsetHeight
      )
      return (
        this.problemsWrapper.current.offsetTop +
        this.problemsWrapper.current.offsetHeight
      )
    }
  }

  componentDidUpdate(_, prevState, snapshot) {
    if (
      prevState.selectedAnswers.length < this.state.selectedAnswers.length &&
      snapshot
    ) {
      window.scrollTo({
        top: snapshot,
        left: 0,
        behavior: 'smooth'
      })
    }

    if (!prevState.submitted && this.state.submitted) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  render() {
    const {submitted, selectedAnswers} = this.state
    return submitted ? (
      <QuizResults selectedAnswers={selectedAnswers} />
    ) : (
      <div
        css={css`
          padding-bottom: 30vh;
        `}
      >
        <div ref={this.problemsWrapper}>
          <QuizProblems
            selectedAnswers={selectedAnswers}
            setAnswer={this.setAnswer}
            submit={this.submit}
          />
        </div>
        {selectedAnswers.length < 12 && (
          <div
            css={css`
              text-align: right;
              margin-top: 1rem;
              color: #777;
              font-size: 0.85rem;
            `}
          >
            {selectedAnswers.length === 11 ? (
              <>これが最後！</>
            ) : (
              <>
                残り<strong>{11 - selectedAnswers.length}問</strong>
              </>
            )}
          </div>
        )}
      </div>
    )
  }
}
