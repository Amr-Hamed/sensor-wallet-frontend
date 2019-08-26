import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  
} from 'react-native';
import { Content, Icon, ListItem} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class TableHead extends Component {
  render() {
    return (
      <ListItem style={styles.tableHeader}>
        <View
          style={{
            borderColor: 'grey',
            borderRightWidth: 1,
            width: 0.4 * WIDTH,
          }}>
          <Text style={styles.tableLeftHeader}>Enter This Survey</Text>
        </View>
        <View
          style={{
            width: 0.25 * WIDTH,
            borderRightWidth: 1,
            borderColor: 'grey',
          }}>
          <Icon name="time" style={{ alignSelf: 'center', color: '#eee' }} />
        </View>
        <View style={{ width: 0.25 * WIDTH }}>
          <Text
            style={{
              color: '#eee',
              fontWeight: 'bold',
              fontSize: 15,
              alignSelf: 'center',
            }}> 
            {' '}
            Start From{' '}
          </Text>
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: '#45b3b5',
    marginLeft: 0,
    flexDirection: 'row',
  },
  tableLeftHeader: {
    marginHorizontal: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eee',
  },
});
