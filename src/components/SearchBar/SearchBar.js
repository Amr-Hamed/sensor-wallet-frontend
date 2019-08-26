import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Icon } from 'native-base';

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Find your survey..."
            style={styles.searchBarPlaceholder}
          />
          <Icon name="search" style={styles.searchBarIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
  searchBar: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  searchBarPlaceholder: {
    marginLeft: '3%',
    fontSize: 20,
  },
  searchBarIcon: {
    marginRight: '3%',
    fontSize: 20,
  },
});
