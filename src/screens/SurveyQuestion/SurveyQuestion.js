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

import Modal from 'react-native-modal';

import { Icon } from 'native-base';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import POSHeader from '../../components/POSHeader';
import SurveyQuestionContainer from '../../components/SurveyQuestionContainer/SurveyQuestionContainer';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';

export default class SurveyQuestion extends React.Component {
  state = {
    isModalVisible: false,
    questions: [],
    currentQuestion: 1,
    nextQuestionButtonText: 'NEXT',
    answerColor: '#DCDCDC',
    selectedAnswer: -1,
    questionAnswers: [],
  };

  componentDidMount = () => {
    fetch('http://demo8354958.mockable.io/clients/21/surveys/1')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          questions: resJson.questions,
        });
      });
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
      if (this.state.nextQuestionButtonText === 'NEXT') {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a,
        });
      } else {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a,
          nextQuestionButtonText: 'NEXT',
        });
      }
    }
  };

   nextButtonPressed = async ()=>{
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
            nextQuestionButtonText: 'SUBMIT',
            selectedAnswer: selectedAnswer.a,
            questionAnswers,
          });
        } else {
          this.setState({
            nextQuestionButtonText: 'SUBMIT',
            selectedAnswer: -1,
            questionAnswers,
          });
        }
      }
      if (this.state.nextQuestionButtonText == 'SUBMIT') {
         await this.setState({
          questionAnswers,
        });
        fetch('http://demo8354958.mockable.io/submitSurvey', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            submitSurvey: {
              clientName: 'zara',
              surveyID: '1',
              clientID: '21',
              endUserID: '26',
              questions: this.state.questionAnswers,
            },
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.code === 200) {
              this.toggleModal();
            } else if (responseJson.code === 500) {
              alert('Server Error!');
            } else if (responseJson.code === 401) {
              alert('Sorry, this survey is expired!');
            }
          })
          .catch(error => {
            console.error(error);
          });
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
            answerBody={answer.body}
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
              this.state.questions[this.state.currentQuestion - 1].body
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
                  {this.state.nextQuestionButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.popUpContainer}>
          <View style={styles.popup}>
            <View style={styles.closeButtonRow}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Icon name="close-circle" style={styles.closeButton} />
              </TouchableOpacity>
            </View>
            <Text style={styles.popUpText}>
              {' '}
              THANKS FOR SUBMITTING{'\n'} THE SURVEY{' '}
            </Text>
            <Image
              source={{
                uri:
                  'https://martielbeatty.com/wp-content/uploads/2018/03/green-tick-png-green-tick-icon-image-14141-1000.png',
              }}
              style={styles.tickImage}
            />
            <Text style={styles.surveySubmitReward}> Your reward is</Text>
            <Text style={styles.surveySubmitReward}> 200 senses</Text>
            <TouchableOpacity
              onPress={this.toggleModal}
              style={styles.hidePopupButton}>
              <Text style={styles.hidePopupButtonText}> Home </Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  popUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: screenWidth * 0.9,
    width: screenWidth * 0.8,
    alignItems: 'center',
  },
  closeButtonRow: {
    alignItems: 'flex-end',
    width: '100%',
  },
  closeButton: {
    marginRight: -(screenWidth * 0.02),
    marginTop: -(screenWidth * 0.025),
    fontSize: screenWidth * 0.12,
  },
  popUpText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    marginTop: -(screenWidth * 0.02),
    textAlign: 'center',
  },
  tickImage: {
    marginTop: screenWidth * 0.05,
    height: screenWidth * 0.25,
    width: screenWidth * 0.25,
    borderRadius: 10,
  },
  surveySubmitReward: {
    marginTop: screenWidth * 0.02,
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
  },
  hidePopupButton: {
    height: screenWidth * 0.15,
    width: '70%',
    backgroundColor: '#5ecccf',
    marginTop: screenWidth * 0.06,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: screenWidth * 0.5,
  },
  hidePopupButtonText: {
    color: 'white',
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
