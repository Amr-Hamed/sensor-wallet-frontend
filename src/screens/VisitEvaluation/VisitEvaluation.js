import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Modal from 'react-native-modal';


import { Icon } from 'native-base';

import SubmitVEPopup from '../../components/SubmitVEPopup/SubmitVEPopup';

export default class VisitEvaluation extends React.Component {
  state = {
    choosenAnswer: null,
    isModalVisible: false,
  };

  chooseAnswer = answer => {
    this.setState({
      choosenAnswer: answer,
    });
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  submitClicked = () => {
    if(this.state.choosenAnswer){
      this.toggleModal();
    }
  }

  render() {
    console.log(this.state.isModalVisible);
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Visit Evaluation </Text>
        </View>
        <View style={styles.evaluationQuestionContainer}>
          <Text style={styles.evaluationQuestion}>{this.props.question}</Text>
        </View>
        <View style={styles.answersContainer}>
          {this.state.choosenAnswer == 'no' && (
            <View style={styles.answersContainer}>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#DCDCDC' }]}
                onPress={() => this.chooseAnswer('yes')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://peoplepng.com/wp-content/uploads/2019/04/blue-tick-icon-png-2.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#5ecccf' }]}
                onPress={() => this.chooseAnswer('no')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://www.clipartmax.com/png/middle/79-792340_cross-out-clip-art-clipart-wrong-clip-art.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {this.state.choosenAnswer === 'yes' && (
            <View style={styles.answersContainer}>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#5ecccf' }]}
                onPress={() => this.chooseAnswer('yes')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://peoplepng.com/wp-content/uploads/2019/04/blue-tick-icon-png-2.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#DCDCDC' }]}
                onPress={() => this.chooseAnswer('no')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://www.clipartmax.com/png/middle/79-792340_cross-out-clip-art-clipart-wrong-clip-art.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!this.state.choosenAnswer && (
            <View style={styles.answersContainer}>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#DCDCDC' }]}
                onPress={() => this.chooseAnswer('yes')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://peoplepng.com/wp-content/uploads/2019/04/blue-tick-icon-png-2.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.answerContainer, { backgroundColor: '#DCDCDC' }]}
                onPress={() => this.chooseAnswer('no')}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://www.clipartmax.com/png/middle/79-792340_cross-out-clip-art-clipart-wrong-clip-art.png',
                    }}
                    style={styles.answer}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitClicked}>
          <Text style={styles.submitButtonText}> SUBMIT </Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.popUpContainer}>
          <View style={styles.popup}>
            <View style={styles.closeButtonRow}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Icon name="close-circle" style={styles.closeButton} />
              </TouchableOpacity>
            </View>
            <Text style={styles.popUpText}> THANKS FOR SUBMITTING YOUR OPINION </Text>
            <Image
              source={{
                uri:
                  'https://martielbeatty.com/wp-content/uploads/2018/03/green-tick-png-green-tick-icon-image-14141-1000.png',
              }}
              style={styles.tickImage}
            />
            <TouchableOpacity
              onPress={this.toggleModal}
              style={styles.hidePopupButton}>
              <Text style={styles.hidePopupButtonText}> Home </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}


let width = Dimensions.get('window').width;

let styles = StyleSheet.create({
  body: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: width,
    height: width * 0.5,
    backgroundColor: '#212121',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: width * 0.15,
  },
  evaluationQuestionContainer: {
    height: width * 0.3,
    width: width * 0.9,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: width * -0.15,
  },
  evaluationQuestion: {
    fontSize: width * 0.06,
    textAlign: 'center',
  },
  answersContainer: {
    width: width * 0.9,
    height: width * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: width * 0.07,
  },
  answerContainer: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    height: width * 0.17,
    width: width * 0.17,
  },
  submitButton: {
    height: width * 0.15,
    width: width * 0.4,
    backgroundColor: '#5ecccf',
    borderRadius: 10,
    marginTop: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  submitButtonText: {
    color: 'white',
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
  popUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: width * 0.8,
    width: width * 0.8,
    alignItems: 'center',
  },
  closeButtonRow: {
    alignItems: 'flex-end',
    width: '100%',
  },
  closeButton: {
    marginRight: -(width * 0.02),
    marginTop: -(width * 0.025),
    fontSize: width * 0.12,
  },
  popUpText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: -(width * 0.02),
    textAlign : 'center'
  },
  tickImage: {
    marginTop: width * 0.05,
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: 10,
  },
  hidePopupButton: {
    height: width * 0.15,
    width: '70%',
    backgroundColor: '#5ecccf',
    marginTop: width * 0.08,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: width * 0.5,
  },
  hidePopupButtonText: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
