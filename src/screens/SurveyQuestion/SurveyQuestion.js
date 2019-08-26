import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import POSHeader from '../../components/POSHeader';
import SurveyQuestionContainer from '../../components/SurveyQuestionContainer/SurveyQuestionContainer';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';

export default class X extends React.Component {
  state = {
    questions: [
      {
        number: 1,
        questionBody:
          '1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga\
          molestiae nesciunt similique, corrupti neque, reiciendis',
        answers: [
          '1 - Lorem ipsum dolor, sit amet consectetur',
          '2 - Lorem ipsum dolor, sit amet consectetur',
          '3 - Lorem ipsum dolor, sit amet consectetur',
        ],
      },
      {
        number: 2,
        questionBody:
          '2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga\
          molestiae nesciunt similique, corrupti neque, reiciendis',
        answers: [
          '1 - Lorem ipsum dolor, sit amet consectetur',
          '2 - Lorem ipsum dolor, sit amet consectetur',
          '3 - Lorem ipsum dolor, sit amet consectetur',
        ],
      },
      {
        number: 3,
        questionBody:
          '3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga\
          molestiae nesciunt similique, corrupti neque, reiciendis',
        answers: [
          '1 - Lorem ipsum dolor, sit amet consectetur',
          '2 - Lorem ipsum dolor, sit amet consectetur',
          '3 - Lorem ipsum dolor, sit amet consectetur',
        ],
      },
    ],
    currentQuestion: 1,
    nextButtonText: 'NEXT',
    answerColor: '#DCDCDC',
    selectedAnswer: -1,
    questionAnswers: [],
  };

  selectAnswer = answerNumber => {
    this.setState({
      selectedAnswer: answerNumber,
    });
  };

  backButtonPressed = () => {
    if (this.state.currentQuestion > 1) {
      let currentQuestion = this.state.currentQuestion;
      let selectedAnswer = this.state.questionAnswers.find(
        answer => answer.q == currentQuestion - 1
      );
      if (this.state.nextButtonText === 'NEXT') {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a,
        });
      } else {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a,
          nextButtonText: 'NEXT',
        });
      }
    }
  };

  nextButtonPressed = () => {
    if (this.state.selectedAnswer === -1) {
      return;
    } else {
      let currentQuestion = this.state.currentQuestion;
      let questionAnswers;
      let existingBefore = this.state.questionAnswers.find(
        answer => answer.q == currentQuestion
      );
      if (existingBefore) {
        this.state.questionAnswers.splice(
          this.state.questionAnswers.indexOf(existingBefore),
          1
        );
      }
      questionAnswers = [
        ...this.state.questionAnswers,
        { q: currentQuestion, a: this.state.selectedAnswer },
      ];
      let selectedAnswer = this.state.questionAnswers.find(answer => {
        return answer.q == currentQuestion + 1;
      });
      if (currentQuestion < this.state.questions.length) {
        if (selectedAnswer) {
          this.setState({
            currentQuestion: currentQuestion + 1,
            selectedAnswer: selectedAnswer.a,
            questionAnswers,
          });
        } else {
          this.setState({
            currentQuestion: currentQuestion + 1,
            selectedAnswer: -1,
            questionAnswers,
          });
        }
      }
      if (currentQuestion + 1 === this.state.questions.length) {
        if (selectedAnswer) {
          this.setState({
            nextButtonText: 'SUBMIT',
            selectedAnswer: selectedAnswer.a,
            questionAnswers,
          });
        } else {
          this.setState({
            nextButtonText: 'SUBMIT',
            selectedAnswer: -1,
            questionAnswers,
          });
        }
      }
    }
  };

  render() {
    let answers = this.state.questions[
      this.state.currentQuestion - 1
    ].answers.map((answer, i) => {
      let answerColor = '#DCDCDC',
        answerTextColor = 'black';
      if (i === this.state.selectedAnswer - 1) {
        (answerColor = '#5ecccf'), (answerTextColor = 'white');
      }
      return (
        <TouchableOpacity
          key={i}
          style={styles.questionAnswer}
          onPress={() => this.selectAnswer(i + 1)}>
          <QuestionAnswer
            answerBody={answer}
            style={styles.questionAnswer}
            answerColor={answerColor}
            answerTextColor={answerTextColor}
          />
        </TouchableOpacity>
      );
    });
    return (
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              Q : {this.state.currentQuestion} / {this.state.questions.length}
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <SurveyQuestionContainer
            questionBody={
              this.state.questions[this.state.currentQuestion - 1].questionBody
            }
          />
          <ScrollView style={styles.answersContainer}>
            {answers}
            <View style={styles.movingBetweenQuestionsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={this.backButtonPressed}>
                <Text style={styles.movingBetweenQuestionsButtonText}>
                  BACK
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={this.nextButtonPressed}>
                <Text style={styles.movingBetweenQuestionsButtonText}>
                  {this.state.nextButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);
const containerDimension = screenWidth / 3;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: screenWidth * 0.45,
    backgroundColor: '#212121',
  },
  headerTitleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: screenWidth * 0.07,
    marginTop: screenWidth * 0.15,
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  answersContainer: {
    width: screenWidth * 0.9,
    marginTop: screenWidth * 0.02,
  },
  questionAnswer: {
    marginTop: screenWidth * 0.04,
  },
  movingBetweenQuestionsContainer: {
    height: screenWidth * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: screenWidth * 0.04,
  },
  backButton: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.3,
    backgroundColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  nextButton: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.3,
    backgroundColor: '#5ecccf',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  movingBetweenQuestionsButtonText: {
    color: 'white',
    fontSize: screenWidth * 0.06,
  },
});
