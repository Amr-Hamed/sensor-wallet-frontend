import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import Modal from "react-native-modal";

import { Icon } from "native-base";

import SurveyQuestionContainer from "../../components/SurveyQuestionContainer/SurveyQuestionContainer";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer";

export default class SurveyQuestion extends React.Component {
  state = {
    isModalVisible: false,
    questions: [
      {
        questionID: 1,
        surveyID: 1,
        questionTypeID: 1,
        body: "Loading...",
        creationDate: '2019-09-01T20:55:13.000Z',
        answers: {
          code: 200,
          msg: 'successfully retreiving answers for question id 1',
          data: [
            { answerID: 1, body: 'Loading...' }
          ],
        },
      }
    ],
    currentQuestion: 1,
    nextQuestionButtonText: "NEXT",
    answerColor: "#DCDCDC",
    selectedAnswer: -1,
    questionAnswers: [],
    userID: this.props.navigation.getParam("userID"),
    clientID: this.props.navigation.getParam("clientID"),
    resourceID: this.props.navigation.getParam("resourceID"),
    surveyReward: this.props.navigation.getParam("surveyReward"),
    clientName: this.props.navigation.getParam("clientName")
  };

  constructor(props) {
    super(props);
    console.log("Client ID : "+this.state.clientID);
    console.log("REsource ID : "+this.state.resourceID);

    fetch(
      `http://134.209.181.231:4000/clients/${this.state.clientID}/resource/${this.state.resourceID}/questions`
    )
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          questions: resJson.questions
        });
      }).catch(err => alert(err))
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  goToProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  selectAnswer = answerID => {
    this.setState({
      selectedAnswer: answerID,
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
      alert("No Previous questions!");
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
          a: this.state.selectedAnswer
        }
      ];
      let selectedAnswer;
      if (this.state.currentQuestion < this.state.questions.length) {
        selectedAnswer = this.state.questionAnswers.find(answer => {
          return (
            answer.q ==
            this.state.questions[this.state.currentQuestion].questionID
          );
        });
      }
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
      if (this.state.nextQuestionButtonText == 'SUBMIT') {
        await this.setState({
          questionAnswers,
        });
        // let day = new Date().getDate(); //Current Date
        // let month = new Date().getMonth(); //Current Month
        // let year = new Date().getFullYear(); //Current Year
        // let today = `${year}-${month}-${day}`;
        console.log("cName : ",this.state.clientName);
        console.log("surveyID : ",this.state.resourceID);
        console.log("cID : ",this.state.clientID);
        console.log("endUserID : ",this.state.userID);
        console.log("questions : ",this.state.questionAnswers);

        fetch('http://134.209.181.231:4000/submitResource', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            submitResource: {
              clientName: this.state.clientName + "",
              resourceID: this.state.resourceID + "",
              clientID: this.state.clientID + "",
              endUserID: this.state.userID + "",
              questions: this.state.questionAnswers,
              resourceTypeID:"2"
            }
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.code === 200) {
              this.toggleModal();
            } else if (responseJson.code === 500) {
              alert('Server Error!');
              this.goToProfile();
            } else if (responseJson.code === 401) {
              alert('Sorry, this survey is expired!');
              this.goToProfile();
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
    ].answers.data.map((answer, i) => {
      let answerColor = "#DCDCDC",
        answerTextColor = "black";
      if (answer.answerID === this.state.selectedAnswer) {
        (answerColor = "#5ecccf"), (answerTextColor = "white");
      }
      return (
        <TouchableOpacity
          key={answer.answerID}
          style={styles.questionAnswer}
          onPress={() => this.selectAnswer(answer.answerID)}
        >
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
              THANKS FOR SUBMITTING{'\n'} THE SURVEY
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
              {this.state.surveyReward} senses
            </Text>
            <TouchableOpacity
              onPress={this.goToProfile}
              style={styles.hidePopupButton}>
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
  headerTitleQuestionNumber: {
    color: "white",
    fontSize: screenWidth * 0.06,
    marginTop: screenWidth * 0.15
  },
  headerTitleTotalQuesionsNumber: {
    fontSize: screenWidth * 0.06,
    marginTop: screenWidth * 0.15
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
    fontWeight: "bold",
    textAlign: "center"
  }
});
