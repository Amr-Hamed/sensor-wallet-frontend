import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";

import Modal from "react-native-modal";

import { Icon } from "native-base";

<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";

import POSHeader from "../../components/POSHeader";
import SurveyQuestionContainer from "../../components/SurveyQuestionContainer/SurveyQuestionContainer";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer";
=======
import SurveyQuestionContainer from '../../components/SurveyQuestionContainer/SurveyQuestionContainer';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307

export default class SurveyQuestion extends React.Component {
  state = {
    isModalVisible: false,
    questions: [
      // {
      //   questionID: 1,
      //   surveyID: 1,
      //   questionTypeID: 1,
      //   body: 'Which browser are you using?',
      //   creationDate: '2019-09-01T20:55:13.000Z',
      //   answers: {
      //     code: 200,
      //     msg: 'successfully retreiving answers for question id 1',
      //     data: [
      //       { answerID: 1, body: 'Chrome' },
      //       { answerID: 2, body: 'Safari' },
      //       { answerID: 3, body: 'Firefox' },
      //       { answerID: 4, body: 'Explorer' },
      //     ],
      //   },
      // },
    ],
    currentQuestion: 1,
    nextQuestionButtonText: "NEXT",
    answerColor: "#DCDCDC",
    selectedAnswer: -1,
    questionAnswers: [],
<<<<<<< HEAD
    userID: this.props.navigation.getParam("userID"),
    clientID: this.props.navigation.getParam("clientID"),
    surveyID: this.props.navigation.getParam("surveyID"),
    surveyReward: this.props.navigation.getParam("surveyReward"),
    clientName: this.props.navigation.getParam("clientName")
  };

  // constructor(props){
  //   super(props);
  // alert('clientID : ' +this.state.clientID + 'userID : '+ this.state.userID  + 'surveyID : ' + this.state.surveyID)

  // }

  constructor(props) {
    super(props);
    fetch(
      `https://bondnbeyond-apigateway.herokuapp.com/clients/${this.state.clientID}/surveys/${this.state.surveyID}`
=======
    userID: this.props.navigation.getParam('userID'),
    clientID: this.props.navigation.getParam('clientID'),
    surveyID: this.props.navigation.getParam('surveyID'),
    surveyReward: this.props.navigation.getParam('surveyReward'),
    clientName: this.props.navigation.getParam('clientName'),
  };

  componentDidMount() {
    fetch(
      `https://bondnbeyond-apigateway.herokuapp.com/clients/${
        this.state.clientID
      }/surveys/${this.state.surveyID}`
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
    )
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          questions: resJson.questions
        });
      });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

<<<<<<< HEAD
  selectAnswer = answerID => {
    this.setState({
      selectedAnswer: answerID
=======
  goToProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  selectAnswer = answerID => {
    this.setState({
      selectedAnswer: answerID,
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
    });
  };

  backButtonPressed = () => {
    if (this.state.currentQuestion > 1) {
      let currentQuestion = this.state.currentQuestion;
      let selectedAnswer = this.state.questionAnswers.find(
        answer =>
          answer.q == this.state.questions[currentQuestion - 2].questionID
      );
      if (this.state.nextQuestionButtonText === "NEXT") {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a
        });
      } else {
        this.setState({
          currentQuestion: currentQuestion - 1,
          selectedAnswer: selectedAnswer.a,
          nextQuestionButtonText: "NEXT"
        });
      }
    } else {
<<<<<<< HEAD
      alert("No Previous questions!");
=======
      alert('No Previous questions!');
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
    }
  };

  nextButtonPressed = async () => {
    if (this.state.selectedAnswer === -1) {
      alert('Please select an answer to proceed!');
    } else {
      let currentQuestion = this.state.currentQuestion;
      let questionAnswers;
      let existingBefore = this.state.questionAnswers.find(
        answer =>
          answer.q ==
          this.state.questions[this.state.currentQuestion - 1].questionID
      );
      if (existingBefore) {
        this.state.questionAnswers.splice(
          this.state.questionAnswers.indexOf(existingBefore),
          1
        );
      }
      questionAnswers = [
        ...this.state.questionAnswers,
        {
          q: this.state.questions[this.state.currentQuestion - 1].questionID,
<<<<<<< HEAD
          a: this.state.selectedAnswer
        }
      ];
      let selectedAnswer;
=======
          a: this.state.selectedAnswer,
        },
      ];
      let selectedAnswer;

>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
      if (this.state.currentQuestion < this.state.questions.length) {
        selectedAnswer = this.state.questionAnswers.find(answer => {
          return (
            answer.q ==
            this.state.questions[this.state.currentQuestion].questionID
          );
        });
      }
<<<<<<< HEAD
=======

>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
      if (this.state.currentQuestion < this.state.questions.length) {
        if (selectedAnswer) {
          this.setState({
            currentQuestion: currentQuestion + 1,
            selectedAnswer: selectedAnswer.a,
            questionAnswers
          });
        } else {
          this.setState({
            currentQuestion: currentQuestion + 1,
            selectedAnswer: -1,
            questionAnswers
          });
        }
      }
      if (this.state.currentQuestion + 1 === this.state.questions.length) {
        if (selectedAnswer) {
          this.setState({
            nextQuestionButtonText: "SUBMIT",
            selectedAnswer: selectedAnswer.a,
            questionAnswers
          });
        } else {
          this.setState({
            nextQuestionButtonText: "SUBMIT",
            selectedAnswer: -1,
            questionAnswers
          });
        }
      }
<<<<<<< HEAD
      if (this.state.nextQuestionButtonText == "SUBMIT") {
        await this.setState({
          questionAnswers
        });
        fetch("https://bondnbeyond-apigateway.herokuapp.com/submitSurvey", {
          method: "POST",
=======
      if (this.state.nextQuestionButtonText == 'SUBMIT') {
        await this.setState({
          questionAnswers,
        });
        let day = new Date().getDate(); //Current Date
        let month = new Date().getMonth(); //Current Month
        let year = new Date().getFullYear(); //Current Year
        let today = `${year}-${month}-${day}`;
        fetch('https://bondnbeyond-apigateway.herokuapp.com/submitSurvey', {
          method: 'POST',
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            submitSurvey: {
<<<<<<< HEAD
              clientName: this.state.clientName + "",
              surveyID: this.state.surveyID + "",
              clientID: this.state.clientID + "",
              endUserID: this.state.userID + "",
              questions: this.state.questionAnswers
            }
          })
=======
              clientName: this.state.clientName + '',
              surveyID: this.state.surveyID + '',
              clientID: this.state.clientID + '',
              endUserID: this.state.userID + '',
              questions: this.state.questionAnswers,
              submissionDate: today,
            },
          }),
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.code === 200) {
              this.toggleModal();
            } else if (responseJson.code === 500) {
<<<<<<< HEAD
              alert("Server Error!");
            } else if (responseJson.code === 401) {
              alert("Sorry, this survey is expired!");
=======
              alert('Server Error!');
              this.goToProfile();
            } else if (responseJson.code === 401) {
              alert('Sorry, this survey is expired!');
              this.goToProfile();
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };

  render() {
    if(this.state.questions.length > 0 ){
    let answers = this.state.questions[
      this.state.currentQuestion - 1
<<<<<<< HEAD
    ].answers.map((answer, i) => {
      let answerColor = "#DCDCDC",
        answerTextColor = "black";
      if (answer.answerID === this.state.selectedAnswer) {
        (answerColor = "#5ecccf"), (answerTextColor = "white");
=======
    ].answers.data.map((answer, i) => {
      let answerColor = '#DCDCDC',
        answerTextColor = 'black';
      if (answer.answerID == this.state.selectedAnswer) {
        (answerColor = '#5ecccf'), (answerTextColor = 'white');
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
      }
      return (
        <TouchableOpacity
          key={answer.answerID}
          style={styles.questionAnswer}
<<<<<<< HEAD
          onPress={() => this.selectAnswer(answer.answerID)}
        >
=======
          onPress={() => this.selectAnswer(answer.answerID)}>
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
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
<<<<<<< HEAD
            <Text style={styles.headerTitleQuestionNumber}>
              Q : {this.state.currentQuestion}
=======
            <Text style={styles.headerTitle}>
              Q : {this.state.currentQuestion} / {this.state.questions.length}
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
            </Text>
            {this.state.nextQuestionButtonText === "NEXT" && (
              <Text
                style={[
                  styles.headerTitleTotalQuesionsNumber,
                  { color: "#ffffff80" }
                ]}
              >
                /{this.state.questions.length}
              </Text>
            )}
            {this.state.nextQuestionButtonText === "SUBMIT" && (
              <Text
                style={[
                  styles.headerTitleTotalQuesionsNumber,
                  { color: "white" }
                ]}
              >
                / {this.state.questions.length}
              </Text>
            )}
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
                onPress={this.backButtonPressed}
              >
                <Text style={styles.movingBetweenQuestionsButtonText}>
                  BACK
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={this.nextButtonPressed}
              >
                <Text style={styles.movingBetweenQuestionsButtonText}>
                  {this.state.nextQuestionButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.popUpContainer}
        >
          <View style={styles.popup}>
            <View style={styles.closeButtonRow}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Icon name="close-circle" style={styles.closeButton} />
              </TouchableOpacity>
            </View>
            <Text style={styles.popUpText}>
<<<<<<< HEAD
              {" "}
              THANKS FOR SUBMITTING{"\n"} THE SURVEY{" "}
=======
              THANKS FOR SUBMITTING{'\n'} THE SURVEY
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
            </Text>
            <Image
              source={{
                uri:
                  "https://martielbeatty.com/wp-content/uploads/2018/03/green-tick-png-green-tick-icon-image-14141-1000.png"
              }}
              style={styles.tickImage}
            />
            <Text style={styles.surveySubmitReward}> Your reward is</Text>
            <Text style={styles.surveySubmitReward}>
<<<<<<< HEAD
              {" "}
              {this.state.surveyReward} senses
            </Text>
            <TouchableOpacity
              onPress={this.toggleModal}
              style={styles.hidePopupButton}
            >
=======
              {this.state.surveyReward} senses
            </Text>
            <TouchableOpacity
              onPress={this.goToProfile}
              style={styles.hidePopupButton}>
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
              <Text style={styles.hidePopupButtonText}> Home </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    )}else{
      return(
        <View></View>
      )
    }
  }
}

const screenWidth = Math.round(Dimensions.get("window").width);
const containerDimension = screenWidth / 3;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%"
  },
  header: {
    height: screenWidth * 0.45,
    backgroundColor: "#212121"
  },
  headerTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
<<<<<<< HEAD
  headerTitleQuestionNumber: {
    color: "white",
    fontSize: screenWidth * 0.06,
    marginTop: screenWidth * 0.15
  },
  headerTitleTotalQuesionsNumber: {
    fontSize: screenWidth * 0.06,
    marginTop: screenWidth * 0.15
=======
  headerTitle: {
    color: 'white',
    fontSize: screenWidth * 0.07,
    marginTop: screenWidth * 0.1,
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
  },
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  answersContainer: {
    width: screenWidth * 0.9,
    marginTop: screenWidth * 0.02
  },
  questionAnswer: {
    marginTop: screenWidth * 0.04,
    alignItems: "center"
  },
  movingBetweenQuestionsContainer: {
    height: screenWidth * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: screenWidth * 0.04
  },
  backButton: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.3,
    backgroundColor: "#b4b4b4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  nextButton: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.3,
    backgroundColor: "#5ecccf",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  movingBetweenQuestionsButtonText: {
    color: "white",
    fontSize: screenWidth * 0.05,
    fontWeight: "bold"
  },
  popUpContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  popup: {
    borderRadius: 5,
    backgroundColor: "white",
    height: screenWidth * 0.9,
    width: screenWidth * 0.8,
    alignItems: "center"
  },
  closeButtonRow: {
    alignItems: "flex-end",
    width: "100%"
  },
  closeButton: {
    marginRight: -(screenWidth * 0.02),
    marginTop: -(screenWidth * 0.025),
    fontSize: screenWidth * 0.12
  },
  popUpText: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    marginTop: -(screenWidth * 0.02),
    textAlign: "center"
  },
  tickImage: {
    marginTop: screenWidth * 0.05,
    height: screenWidth * 0.25,
    width: screenWidth * 0.25,
    borderRadius: 10
  },
  surveySubmitReward: {
    marginTop: screenWidth * 0.02,
    fontSize: screenWidth * 0.05,
    fontWeight: "bold"
  },
  hidePopupButton: {
    height: screenWidth * 0.15,
    width: "70%",
    backgroundColor: "#5ecccf",
    marginTop: screenWidth * 0.06,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: screenWidth * 0.5
  },
  hidePopupButtonText: {
    color: "white",
    fontSize: screenWidth * 0.06,
<<<<<<< HEAD
    fontWeight: "bold",
    textAlign: "center"
  }
});
=======
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
>>>>>>> e5c0da887c62527f77f9d2ffc6ad8cf7dc0dd307
