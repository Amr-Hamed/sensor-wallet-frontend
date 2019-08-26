import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon } from 'native-base';

export default class SocialMediaLogin extends React.Component {
  state = {
    icons: this.props.icons,
  };

  render() {
    let icons = this.state.icons.map((icon, i) => {
      return <Icon name={icon} style={styles.socialMediaLoginIcon} />;
    });
    return (
      <View style={styles.socailLoginIconsContainer}>
        <View style={styles.socailLoginIcons}>
          {icons}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  socailLoginIconsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
  },
  socailLoginIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '60%',
    marginVertical: 10,
  },
  socialMediaLoginIcon: {
    color: 'white',
    height: 30,
    width: 30,
  },
});
