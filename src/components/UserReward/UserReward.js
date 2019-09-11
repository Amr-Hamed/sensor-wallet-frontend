import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import { Icon } from 'native-base';

export default class UserReward extends React.Component {
  render() {
    let rewardDate = this.props.data.transactionDate.split('T');
    let rewardDay = rewardDate[0];
    let rewardTime = rewardDate[1].split('.')[0];
    return (
      <View>
        {this.props.data.receiverUserName != this.props.userName && (
          <View style={styles.main}>
            <View style={styles.user}>
              <View style={styles.userLabelContainer}>
                <Text style={styles.userLabel}>Sender</Text>
              </View>
              <View style={styles.userImageContainer}>
                <Image
                  source={{
                    uri: this.props.data.senderImage,
                  }}
                  style={styles.userImage}
                />
              </View>
              <View style={styles.userNameContainer}>
                <Text style={styles.userName}>
                  {this.props.data.senderUserName}
                </Text>
              </View>
            </View>
            <View style={styles.reward}>
              <View style={styles.rewardData}>
                <Text style={[styles.amountAndCurrency, { color: '#c93521' }]}>
                  {this.props.data.amount} {this.props.data.name}
                </Text>
              </View>
              <View style={styles.arrowImageContainer}>
                <Image
                  source={{
                    uri:
                      'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69469147_738304556627467_8634936353089388544_n.png?_nc_cat=100&_nc_oc=AQkVd_rnlf5zf80BCgtMAThTaNvWx2e_pWTGzSvriO4IgYpzNUtsEIEVKJxkqYVqQTc&_nc_ht=scontent-hbe1-1.xx&oh=107bb1703b3be56ac03c30580d393baf&oe=5DCF2F18',
                  }}
                  style={styles.rewardArrow}
                />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>
                  {rewardDay} {rewardTime}
                </Text>
              </View>
            </View>
            <View style={styles.user}>
              <View style={styles.userLabelContainer}>
                <Text style={styles.userLabel}>Reciever</Text>
              </View>
              <View style={styles.userImageContainer}>
                <Image
                  source={{
                    uri: this.props.data.receiverClientImage,
                  }}
                  style={styles.userImage}
                />
              </View>
              <View style={styles.userNameContainer}>
                <Text style={styles.userName}>
                  {this.props.data.receiverClientName}
                </Text>
              </View>
            </View>
          </View>
        )}
        {this.props.data.receiverUserName == this.props.userName && (
          <View style={styles.main}>
            <View style={styles.user}>
              <View style={styles.userLabelContainer}>
                <Text style={styles.userLabel}>Reciever</Text>
              </View>
              <View style={styles.userImageContainer}>
                <Image
                  source={{
                    uri: this.props.data.receiverImage,
                  }}
                  style={styles.userImage}
                />
              </View>
              <Text style={styles.userName}>
                {this.props.data.receiverUserName}
              </Text>
            </View>
            <View style={styles.reward}>
              <View style={styles.rewardData}>
                <Text style={[styles.amountAndCurrency, { color: '#5eae33' }]}>
                  {this.props.data.amount} {this.props.data.name}
                </Text>
              </View>
              <View style={styles.arrowImageContainer}>
                <Image
                  source={{
                    uri:
                      'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/68809578_439127240029969_8469208112190980096_n.png?_nc_cat=102&_nc_oc=AQmT8U5kwPU74IE5kjSmD7oHK9GshRUr96fMC6tU4yatA4Jc5stBx88_rIlBSBXra2c&_nc_ht=scontent-hbe1-1.xx&oh=61fcbe18d357ec37626c87729d564c6b&oe=5E087F5F',
                  }}
                  style={styles.rewardArrow}
                />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>
                  {rewardDay} {rewardTime}
                </Text>
              </View>
            </View>
            <View style={styles.client}>
              <View style={styles.clientLabelContainer}>
                <Text style={styles.clientLabel}>Sender</Text>
              </View>
              <View style={styles.clientImageContainer}>
                <Image
                  source={{
                    uri: this.props.data.senderImage,
                  }}
                  style={styles.clientImage}
                />
              </View>
              <View style={styles.clientNameContainer}>
                <Text style={styles.clientName}>
                  {this.props.data.senderClientName}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  main: {
    width: width * 0.9,
    height: width * 0.23,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.02,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 5,
  },
  user: {
    height: '100%',
    width: width * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userLabelContainer: {
    width: width * 0.25,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLabel: {
    fontSize: width * 0.03,
  },
  userImageContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.05,
  },
  userNameContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: width * 0.03,
    textAlign: 'center',
  },
  reward: {
    height: '100%',
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rewardData: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
  },
  amountAndCurrency: {
    textAlign: 'center',
    fontSize: width * 0.03,
  },
  arrowImageContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardArrow: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  dateContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
  },
  date: {
    fontSize: width * 0.03,
    textAlign: 'center',
  },
  client: {
    height: '100%',
    width: width * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  clientLabelContainer: {
    width: width * 0.25,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clientLabel: {
    fontSize: width * 0.03,
  },
  clientImageContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clientImage: {
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.05,
  },
  clientNameContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clientName: {
    fontSize: width * 0.03,
    textAlign: 'center',
  },
});
