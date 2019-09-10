import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

import { Spinner } from "native-base";

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import WalletCurrencies from "../../components/WalletCurrencies/WalletCurrencies";
import UserTransactions from "../../components/UserTransactions/UserTransactions";

export default class UserWallet extends React.Component {
  state = {
    selectedTab: "wallet",
    accountBalance: 20000,
    lastIncome: 1000,
    lastExpenses: 500,
    currencies: [],
    transactions: [],
    userID: this.props.navigation.getParam("userID"),
    walletID: this.props.navigation.getParam("walletID"),
    userName: this.props.navigation.getParam("userName"),
    userImg: this.props.navigation.getParam("userImg"),
    showActivity: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    let currencies = [],
      transactions = [];
    fetch(
      `https://bondnbeyond-apigateway.herokuapp.com/enduser/${this.state.userID}/balance`
    )
      .then(res => res.json())
      .then(resJson => {
        currencies = resJson.data;
        this.setState({
          currencies,
          showActivity: false
        });
      });
    fetch(
      `https://bondnbeyond-apigateway.herokuapp.com/enduser/wallet/${this.state.walletID}/transactions`
    )
      .then(res => res.json())
      .then(resJson => {
        transactions = resJson.data;
        this.setState({
          transactions
        });
      });
  };

  selectTab = selectedTab => {
    this.setState({
      selectedTab
    });
  };

  onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        if (this.state.selectedTab == "wallet") {
          this.setState({ selectedTab: "transactions" });
        } else if (this.state.selectedTab == "transactions") {
          this.setState({ selectedTab: "rewards" });
        }
        break;
      case SWIPE_RIGHT:
        if (this.state.selectedTab == "rewards") {
          this.setState({ selectedTab: "transactions" });
        } else if (this.state.selectedTab == "transactions") {
          this.setState({ selectedTab: "wallet" });
        }
        break;
    }
  }

  render() {
    return (
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account Balance</Text>
          <Text style={styles.headerTitle}>
            {this.state.accountBalance} L.E.
          </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.walletMainInfo}>
            <View style={styles.userAvatarContainer}>
              <Image
                source={{ uri: this.state.userImg }}
                style={styles.userAvatar}
              />
            </View>
            <View style={styles.walletLastIncomeContainer}>
              <Text style={styles.walletLastIncomeLabel}>
                {"\u2022"} Last income
              </Text>
              <Text style={styles.walletLastIncomeAmount}>
                {this.state.lastIncome} L.E.
              </Text>
            </View>
            <View style={styles.walletLastExpensesContainer}>
              <Text style={styles.walletLastExpensesLabel}>
                {"\u2022"} Last expenses
              </Text>
              <Text style={styles.walletLastExpensesAmount}>
                {this.state.lastExpenses} L.E.
              </Text>
            </View>
          </View>
          {this.state.selectedTab === "wallet" && (
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                onPress={() => this.selectTab("wallet")}
                style={styles.selectedTab}
              >
                <Text style={styles.selectedTabText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("transactions")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("rewards")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Rewards</Text>
              </TouchableOpacity>
            </View>
          )}
          {this.state.selectedTab === "transactions" && (
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                onPress={() => this.selectTab("wallet")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("transactions")}
                style={styles.selectedTab}
              >
                <Text style={styles.selectedTabText}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("rewards")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Rewards</Text>
              </TouchableOpacity>
            </View>
          )}
          {this.state.selectedTab === "rewards" && (
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                onPress={() => this.selectTab("wallet")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("transactions")}
                style={styles.tab}
              >
                <Text style={styles.tabText}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.selectTab("rewards")}
                style={styles.selectedTab}
              >
                <Text style={styles.selectedTabText}>Rewards</Text>
              </TouchableOpacity>
            </View>
          )}

          {this.state.selectedTab === "wallet" && (
            <GestureRecognizer onSwipe={direction => this.onSwipe(direction)}>
              <WalletCurrencies currencies={this.state.currencies} userName={this.state.userName} />
            </GestureRecognizer>
          )}
          {this.state.selectedTab === "transactions" && (
            <GestureRecognizer onSwipe={direction => this.onSwipe(direction)}>
              <UserTransactions transactions={this.state.transactions} userName={this.state.userName}/>
            </GestureRecognizer>
          )}
          {this.state.selectedTab === "rewards" && (
            <GestureRecognizer onSwipe={direction => this.onSwipe(direction)}>
              <Text
                style={{
                  height: 100,
                  width: width,
                  textAlign: "center",
                  backgroundColor: "#eee",
                  padding: 20
                }}
              >
                Feature Coming Soon
              </Text>
            </GestureRecognizer>
          )}
        </View>
      </ScrollView>
    );
  }
}

let width = Dimensions.get("window").width;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
    resizeMode: "contain"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  body: {
    width: width
  },
  header: {
    width: width,
    height: width * 0.55,
    backgroundColor: "#212121",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: "row",
    justifyContent: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginTop: width * 0.15
  },
  main: {
    alignItems: "center"
  },
  walletMainInfo: {
    height: width * 0.3,
    width: width * 0.9,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    marginTop: width * -0.15,
    alignItems: "center"
  },
  userAvatarContainer: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: "#A9A9A9",
    borderRadius: width * 0.125,
    marginTop: width * -0.125,
    justifyContent: "center",
    alignItems: "center"
  },
  userAvatar: {
    height: width * 0.23,
    width: width * 0.23,
    borderRadius: width * 0.115
  },
  walletLastIncomeContainer: {
    width: width * 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: width * 0.01
  },
  walletLastIncomeLabel: {
    fontSize: width * 0.045
  },
  walletLastIncomeAmount: {
    fontSize: width * 0.045,
    color: "green"
  },
  walletLastExpensesContainer: {
    width: width * 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: width * 0.02
  },
  walletLastExpensesLabel: {
    fontSize: width * 0.045
  },
  walletLastExpensesAmount: {
    fontSize: width * 0.045,
    color: "red"
  },
  tabsContainer: {
    width: width,
    height: width * 0.15,
    marginTop: width * 0.03,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cfcece"
  },
  tab: {
    width: width / 3,
    height: width * 0.15,
    justifyContent: "center"
  },
  tabText: {
    color: "#444343cc",
    fontSize: width * 0.04,
    fontWeight: "bold",
    textAlign: "center"
  },
  selectedTab: {
    width: width / 3,
    height: width * 0.15,
    justifyContent: "center",
    borderBottomWidth: 2
  },
  selectedTabText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    textAlign: "center"
  }
});
