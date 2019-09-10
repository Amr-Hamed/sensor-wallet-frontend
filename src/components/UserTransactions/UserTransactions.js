import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import RNPickerSelect from "react-native-picker-select";

import UserTransaction from "../UserTransaction/UserTransaction";

export default class UserTransactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "All",
      transactions: this.props.transactions,
      displayed: this.props.transactions
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      transactions: nextProps.transactions,
      displayed: nextProps.transactions
    });
  }

  selectItem = async item => {
    if (item === "All") {
      await this.setState({
        displayed: this.state.transactions,
        selectedItem: item
      });
    } else if (item === "Income") {
      let displayed = this.state.transactions.filter(element => {
        return element.senderUserName !== this.props.userName;
      });
      await this.setState({
        selectedItem: item,
        displayed
      });
    } else if (item === "Expenses") {
      let displayed = this.state.transactions.filter(element => {
        return element.senderUserName === this.props.userName;
      });
      await this.setState({
        selectedItem: item,
        displayed
      });
    }
  };

  render() {
    if (this.props.transactions.length !== 0) {

      let transactions = this.state.displayed.map((transaction, i) => {
        return (
          <UserTransaction
            data={transaction}
            userName={this.props.userName}
            userImg={this.props.userImg}
          />
        );
      });
      return (
        <View style={styles.main}>
          <RNPickerSelect
            onValueChange={item => this.selectItem(item)}
            placeholder={{
              label: "Filter transactions",
              value: ""
            }}
            items={[
              { label: "All", value: "All" },
              { label: "Income", value: "Income" },
              { label: "Expenses", value: "Expenses" }
            ]}
            style={styles.dropdown}
          />
          <View style={styles.transactions}>{transactions}</View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{ alignSelf: 'center' }}>Sorry You don't have any Transactions</Text>
        </View>
      )
    }
  }
}

let width = Dimensions.get("window").width;
let styles = StyleSheet.create({
  transactions: {
    marginBottom: width * 0.05
  },
  dropdown: {
    width: width * 0.5,
    height: width * 0.3
  }
});
