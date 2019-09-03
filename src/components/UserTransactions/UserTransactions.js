import React from 'react';
import { View , Text , Dimensions ,  StyleSheet } from 'react-native';

import UserTransaction from '../UserTransaction/UserTransaction';

export default class UserTransactions extends React.Component {
  render() {
    if (this.props.transactions.length !== 0 ){

      let transactions = this.props.transactions.map((transaction, i) => {
        return <UserTransaction data={transaction} userName = {this.props.userName} userImg = {this.props.userImg} />;
      });
      return <View style={styles.transactions}>{transactions}</View>;
    } else {
      return(
        <View>
          <Text style = {{alignSelf : 'center'}}>Sorry You don't have any Transactions</Text>
        </View>
      )
    }
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  transactions: {
    marginBottom: width * 0.05,
  },
})