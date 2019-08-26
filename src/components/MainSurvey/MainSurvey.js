import React from 'react';
import { View, Image, Text, Thumbnail, Dimensions , StyleSheet } from 'react-native';

const width = Dimensions.get('window').width,
height = Dimensions.get('window').height;
export default class MainSurvey extends React.Component {
  state = {
    surveyImage: this.props.surveyImage,
  };
  render() {
    return (
      <View style={styles.main}>
        <Image
          source={{
            uri: this.state.surveyImage,
          }}
          style={styles.surveyImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width :width,
    height : height,
    backgroundColor: 'red',
  },
  surveyImage: {
    height : height*0.75,
    width : width,
    resizeMode : 'contain'
  },
});
