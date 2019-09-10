import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class RedeemPlaceContainer extends React.Component {
  state = {
    logoPath: this.props.placeLogo || 'https://www.fogratravel.pl/events/images/loader.gif',
  };

  componentWillReceiveProps(nextProps) {
    if (!this.state.logoPath) {
      this.setState({
        logoPath: nextProps.placeLogo,
      });
    }
  }

  render() {
    return (
        <Image source={{ uri: this.state.logoPath }} style={styles.placeLogo} />
    );
  }
}

const styles = StyleSheet.create({
  placeLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
