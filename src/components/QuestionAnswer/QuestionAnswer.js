import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

export default class QuestionAnswer extends React.Component {
  state = {
    answerBody: this.props.answerBody,
    answerColor: this.props.answerColor,
    answerTextColor: this.props.answerTextColor
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.answerBody != nextProps.answerBody) {
      this.setState({
        answerBody: nextProps.answerBody
      });
    }
  }

  render() {
    return (
      <View
        style={[
          styles.answerContainer,
          { backgroundColor: this.props.answerColor }
        ]}
      >
        <Text
          style={[styles.answerBody, { color: this.props.answerTextColor }]}
        >
          {" "}
          {this.props.answerBody}{" "}
        </Text>
      </View>
    );
  }
}

let WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  answerContainer: {
    width: "98%",
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10
  },
  answerBody: {
    padding: WIDTH * 0.03,
    fontSize: WIDTH * 0.05
  }
});
