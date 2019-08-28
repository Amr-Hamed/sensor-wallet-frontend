import React from 'react';
import { View , Text , Dimensions ,  StyleSheet } from 'react-native';

import UserTransaction from '../UserTransaction/UserTransaction';

export default class UserTransactions extends React.Component {
  render() {
    let transactions = this.props.transactions.map((transaction, i) => {
      return <UserTransaction data={transaction} />;
    });
    return <View style={styles.transactions}>{transactions}</View>;
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  transactions: {
    marginBottom: width * 0.05,
  },
})