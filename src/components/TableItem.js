import React, { Component } from 'react';
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native';
import { Content, Icon, ListItem } from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class TableItem extends Component {
  render() {
    return (
      <ListItem style={styles.tableItem}>
        <View style={styles.tableItemLeft}>
          <Text style={styles.tableItemLeft}>
           {this.props.left}
          </Text>
        </View>
        <View style={styles.tableItemMiddle}>
          <Text
            style={{
              color: 'grey',
              alignSelf: 'center',
              marginHorizontal: 0.05 * WIDTH,
            }}>
            {this.props.midel}
          </Text>
        </View>
        <View style={styles.tableItemRight}>
          <Text
            style={{
              color: '#137b08',
              alignSelf: 'center',
              marginHorizontal: 0.1 * WIDTH,
              fontWeight: 'bold',
            }}>
           {this.props.right}
          </Text>
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  tableItem: {
    marginLeft: 0,
    flexDireaction: 'row',
    position: 'relative',
  },
  tableItemLeft: {
    fontSize: 13,
    color: '#333',
    borderColor: 'grey',
    borderRightWidth: 1,
    width: 0.4 * WIDTH,
  },
  tableItemMiddle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderRightWidth: 1,
    width: 0.25 * WIDTH,
    height: '100%',
  },
  tableItemRight: {},
});
