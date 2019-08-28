import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'; 

import WalletCurrencies from '../../components/WalletCurrencies/WalletCurrencies';
import UserTransactions from '../../components/UserTransactions/UserTransactions';

export default class UserWallet extends React.Component {
  state = {
    selectedTab: 'wallet',
    accountBalance: 20000,
    lastIncome: 1000,
    lastExpenses: 500,
    currencies: [],
    transactions: [],
  };

  componentDidMount = () => {
    let currencies = [],
      transactions = [];
    fetch('https://bondnbeyond-apigateway.herokuapp.com/enduser/1/balance')
      .then(res => res.json())
      .then(resJson => {
        currencies = resJson.data;
        this.setState({
          currencies,
        });
      });
    fetch(
      'https://bondnbeyond-apigateway.herokuapp.com/enduser/wallet/33/transactions'
    )
      .then(res => res.json())
      .then(resJson => {
        transactions = resJson.data;
        this.setState({
          transactions,
        });
      });
  };

  selectTab = selectedTab => {
    this.setState({
      selectedTab,
    });
  };
  render() {
    return (
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Account Balance </Text>
          <Text style={styles.headerTitle}>
            {this.state.accountBalance} L.E.
          </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.walletMainInfo}>
            <View style={styles.userAvatarContainer}>
              <Image
                source={{
                  uri:
                    'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/36789954_1406455036121336_5862702166598221824_n.jpg?_nc_cat=103&_nc_oc=AQncS86wr6Xl-p-8K7j3L0RzFqHm694kOTk9gBf6KnRoX33o-JG4TvSyVSdZfb7IzNA&_nc_ht=scontent-hbe1-1.xx&oh=94a0238a4b98981edb78c1c4d1ac83b4&oe=5DD577B4',
                }}
                style={styles.userAvatar}
              />
            </View>
            <View style={styles.walletLastIncomeContainer}>
              <Text style={styles.walletLastIncomeLabel}>
                {'\u2022'} Last income
              </Text>
              <Text style={styles.walletLastIncomeAmount}>
                {this.state.lastIncome} L.E.
              </Text>
            </View>
            <View style={styles.walletLastExpensesContainer}>
              <Text style={styles.walletLastExpensesLabel}>
                {'\u2022'} Last expenses
              </Text>
              <Text style={styles.walletLastExpensesAmount}>
                {this.state.lastExpenses} L.E.
              </Text>
            </View>
          </View>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => this.selectTab('wallet')}
              style={styles.tab}>
              <Text style={styles.tabText}> Wallet </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectTab('transactions')}
              style={styles.tab}>
              <Text style={styles.tabText}> Transactions </Text>
            </TouchableOpacity>
          </View>
          {this.state.selectedTab === 'wallet' && (
            <WalletCurrencies currencies={this.state.currencies} />
          )} 
          {this.state.selectedTab === 'transactions' && (
            <UserTransactions transactions={this.state.transactions} />
          )}
        </View>
      </ScrollView>
    );
  }
}

let width = Dimensions.get('window').width;

let styles = StyleSheet.create({
  body: {
    width: width,
  },
  header: {
    width: width,
    height: width * 0.6,
    backgroundColor: '#212121',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: width * 0.15,
  },
  main: {
    alignItems: 'center',
  },
  walletMainInfo: {
    height: width * 0.35,
    width: width * 0.9,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    marginTop: width * -0.175,
    alignItems: 'center',
  },
  userAvatarContainer: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: '#A9A9A9',
    borderRadius: width * 0.125,
    marginTop: width * -0.125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    height: width * 0.23,
    width: width * 0.23,
    borderRadius: width * 0.115,
  },
  walletLastIncomeContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.02,
  },
  walletLastIncomeLabel: {
    fontSize: width * 0.06,
  },
  walletLastIncomeAmount: {
    fontSize: width * 0.06,
    color: 'green',
  },
  walletLastExpensesContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.02,
  },
  walletLastExpensesLabel: {
    fontSize: width * 0.06,
  },
  walletLastExpensesAmount: {
    fontSize: width * 0.06,
    color: 'red',
  },
  tabsContainer: {
    width: width * 0.9,
    height: width * 0.15,
    marginTop: width * 0.03,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: '#25babc',
    width: width * 0.4,
    height: width * 0.15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabText: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
