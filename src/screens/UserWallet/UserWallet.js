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
    currencies: [
      {
        currency: {
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
          name: 'US Dollar',
          amount: 100,
          abbreviation: 'USD',
          currencySymbol: '$',
        },  
      },
      { 
        currency: {
          image:
            'https://www.reddickmilitaria.com/images/products/4200-035-006.png',
          name: 'English Pound Sterling',
          amount: 1600,
          abbreviation: 'GBP',
          currencySymbol: '£',
        },
      }, 
      { 
        currency: {
          image: 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png',
          name: 'Egyptian Pound',
          amount: 800,
          abbreviation: 'L.E.',
          currencySymbol: 'E£',
        }, 
      },
      {
        currency: {
          image:
             'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/68751678_654639151724181_3146064729730973696_n.png?_nc_cat=101&_nc_oc=AQnti9Wb7gV37dYpUgxZOPadcVqHNC8ACLU7SPBSQfQHystYEaSISAocnuwEvw1EfuE&_nc_ht=scontent-hbe1-1.xx&oh=62b726332d2fd8b782e3b7997c19d2a8&oe=5DCE056E',
          name: 'Senses',
          amount: 200,
          abbreviation: 'SNS',
          currencySymbol: 'SNS',
        },
      },
    ],
    transactions: [
      {  
        sender: {
          image:
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-1/p50x50/50967370_1673125816120922_6830167314076270592_n.jpg?_nc_cat=106&_nc_oc=AQnaidCRY92GKJOv90Gu1-EriaO3kG5Cj4iQK_i0VyxPpQp4VGrmpj-4ZxKBpaozzWw&_nc_ht=scontent-hbe1-1.xx&oh=ae5e2f7eb373af258153c37e21e994e8&oe=5DD379DB',
          name: 'Amr Essam',
        },
        reciever: {
          image: 
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/44047495_2058300504233566_1639701900955746304_n.jpg?_nc_cat=108&_nc_oc=AQnihJu_SFCq6qXiHkLJS3-skkKRJHKGnP_TuB3_uWCXBMCo52cJsv7WxwjE37eFeDM&_nc_ht=scontent-hbe1-1.xx&oh=da5fd88daa7736f41b550af0836ccac5&oe=5E0B6761',
          name: 'Mohamed Helmi',
        }, 
        amount: 200,
        currency: 'Senses',
        date: '1/10/2019 12:39pm',
      },
      {
        reciever: {
          image:
             'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-1/p50x50/50967370_1673125816120922_6830167314076270592_n.jpg?_nc_cat=106&_nc_oc=AQnaidCRY92GKJOv90Gu1-EriaO3kG5Cj4iQK_i0VyxPpQp4VGrmpj-4ZxKBpaozzWw&_nc_ht=scontent-hbe1-1.xx&oh=ae5e2f7eb373af258153c37e21e994e8&oe=5DD379DB',
          name: 'Amr Essam',
        },
        sender: {
          image:
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/53241084_2125178194238141_4817942090421895168_n.jpg?_nc_cat=101&_nc_oc=AQnaibw-cxzs7F_2lF08_rvfQWkxDmS1i1K4IF4tB2wU8AAHHWtOWFz4Dhk3aQkkzns&_nc_ht=scontent-hbe1-1.xx&oh=3a261ec8a6a47c90d0f61ea265ab9ce2&oe=5E08F1F0',
          name: 'MOhamed khaled',
        },
        amount: 400,
        currency: 'US Dollars',
        date: '14/03/2019 08:00am',
      },
      {
        reciever: {
          image:
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-1/p50x50/50967370_1673125816120922_6830167314076270592_n.jpg?_nc_cat=106&_nc_oc=AQnaidCRY92GKJOv90Gu1-EriaO3kG5Cj4iQK_i0VyxPpQp4VGrmpj-4ZxKBpaozzWw&_nc_ht=scontent-hbe1-1.xx&oh=ae5e2f7eb373af258153c37e21e994e8&oe=5DD379DB',
          name: 'Amr Essam',
        },
        sender: {
          image: 
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/14370324_1289355127771596_5804819192345506495_n.jpg?_nc_cat=111&_nc_oc=AQmCgHEe--UwZ_VT0S-Oes8rHzNLN5mWnGpSCc-pf-1djpdcmL1smh-4VjeFU61fprc&_nc_ht=scontent-hbe1-1.xx&oh=e2dc46c0364d2ceafb68f21238f15c3b&oe=5DD5768A',
          name: 'Mostafa Hasan',
        }, 
        amount: 1200,
        currency: 'Egyptian Pounds',
        date: '28/07/2019 01:12am',
      },
      {  
        sender: {
          image:
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-1/p50x50/50967370_1673125816120922_6830167314076270592_n.jpg?_nc_cat=106&_nc_oc=AQnaidCRY92GKJOv90Gu1-EriaO3kG5Cj4iQK_i0VyxPpQp4VGrmpj-4ZxKBpaozzWw&_nc_ht=scontent-hbe1-1.xx&oh=ae5e2f7eb373af258153c37e21e994e8&oe=5DD379DB',
          name: 'Amr Essam',
        },
        reciever: {
          image:
            'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/55661521_2591847187509409_9042973411738910720_n.jpg?_nc_cat=104&_nc_oc=AQmBvkx72AjAGOqf0tvD1V4QBmPd61-UnRl1oPL4_fp-73SC-0W-ILaqOzJ04SBq5BA&_nc_ht=scontent-hbe1-1.xx&oh=8ac71051cf0472a6a77ec24a4a23867b&oe=5E10AB16',
          name: 'Mohamed Gomaa',
        },
        amount: 1200,
        currency: 'Egyptian Pounds',
        date: '28/07/2019 01:12am',
      },
    ],
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
