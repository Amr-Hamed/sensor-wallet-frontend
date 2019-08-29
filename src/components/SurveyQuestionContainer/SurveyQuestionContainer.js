import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default class SurveyQuestionContainer extends React.Component {

  state = {
    questionBody: this.props.questionBody
  }

   componentWillReceiveProps(nextProps){
    if(this.state.answerBody != nextProps.questionBody){
      this.setState({
        questionBody : nextProps.questionBody
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.questionBody}>
          {this.state.questionBody}
        </Text>
      </View>
    );
  }
}

let WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width : WIDTH*0.9,
    height: WIDTH*0.3,
    marginTop: WIDTH*(-0.15),
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  questionBody: {
    magin: WIDTH*0.03,
    padding: WIDTH*0.03,
    fontSize: WIDTH*0.05,
    textAlign: 'center'
  },
});
