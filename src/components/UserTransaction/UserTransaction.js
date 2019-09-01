import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import { Icon } from 'native-base';

export default class UserTransaction extends React.Component {
  render() {
    return (
      <View>
        {this.props.data.senderUserName == this.props.userName && (
          <View style={styles.main}>
            <View style={styles.sender}>
              <View style={styles.senderLabelContainer}>
                <Text style={styles.senderLabel}> Sender </Text>
              </View>
              <Image
                source={{
                  uri: this.props.data.senderImage,
                }}
                style={styles.senderImage}
              />
              <View style={styles.senderNameContainer}>
                <Text style={styles.senderName}>
                  {this.props.data.senderUserName}
                </Text>
              </View>
            </View>
            <View style={styles.transaction}>
              <View style={styles.transactionData}>
                <Text style={[styles.amount, { color: '#c93521' }]}>
                  {this.props.data.amount}
                </Text>
                <Text style={[styles.currency, { color: '#c93521' }]}>
                  {this.props.data.name}
                </Text>
              </View>
              <View style={styles.arrowImageContainer}>
                <Image
                  source={{
                    uri:
                      'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/69469147_738304556627467_8634936353089388544_n.png?_nc_cat=100&_nc_oc=AQkVd_rnlf5zf80BCgtMAThTaNvWx2e_pWTGzSvriO4IgYpzNUtsEIEVKJxkqYVqQTc&_nc_ht=scontent-hbe1-1.xx&oh=107bb1703b3be56ac03c30580d393baf&oe=5DCF2F18'
                  }}
                  style={styles.transactionArrow}
                />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}> {this.props.data.transactionDate} </Text>
              </View>
            </View>
            <View style={styles.reciever}>
              <View style={styles.recieverLabelContainer}>
                <Text style={styles.recieverLabel}> Reciever </Text>
              </View>
              <Image
                source={{
                  uri: this.props.data.receiverImage
                }}
                style={styles.recieverImage}
              />
              <View style={styles.recieverNameContainer}>
                <Text style={styles.recieverName}>
                  {this.props.data.receiverUserName}
                </Text>
              </View>
            </View>
          </View>
        )}
        {this.props.data.senderUserName != this.props.userName && (
          <View style={styles.main}>
            <View style={styles.reciever}>
              <View style={styles.recieverLabelContainer}>
                <Text style={styles.recieverLabel}> Reciever </Text>
              </View>
              <Image
                source={{
                  uri: this.props.data.receiverImage,
                }}
                style={styles.recieverImage}
              />
              <Text style={styles.recieverName}>
                {this.props.data.receiverUserName}
              </Text>
            </View>
            <View style={styles.transaction}>
              <View style={styles.transactionData}>
                <Text style={[styles.amount, { color: '#70ad47' }]}>
                  {this.props.data.amount}
                </Text>
                <Text style={[styles.currency, { color: '#70ad47' }]}>
                  {this.props.data.name}
                </Text>
              </View>
              <View style={styles.arrowImageContainer}>
                <Image
                  source={{
                    uri:
                      'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/68809578_439127240029969_8469208112190980096_n.png?_nc_cat=102&_nc_oc=AQmT8U5kwPU74IE5kjSmD7oHK9GshRUr96fMC6tU4yatA4Jc5stBx88_rIlBSBXra2c&_nc_ht=scontent-hbe1-1.xx&oh=61fcbe18d357ec37626c87729d564c6b&oe=5E087F5F',
                  }}
                  style={styles.transactionArrow}
                />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}> {this.props.data.transactionDate} </Text>
              </View>
            </View>
            <View style={styles.sender}>
              <View style={styles.senderLabelContainer}>
                <Text style={styles.senderLabel}> Sender </Text>
              </View>
              <Image
                source={{
                  uri: this.props.data.senderImage,
                }}
                style={styles.senderImage}
              />
              <View style={styles.senderNameContainer}>
                <Text style={styles.senderName}>
                  {this.props.data.senderUserName}
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
    height: width * 0.35,
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
    borderRadius: 10,
  },
  sender: {
    height: '100%',
    width: width * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  senderLabelContainer: {
    width: width * 0.25,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  senderLabel: {
    fontSize: width * 0.04,
  },
  senderImage: {
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: width * 0.1,
  },
  senderName: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginTop: width * 0.03,
  },
  transaction: {
    height: '100%',
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  transactionData: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
  },
  amount: {
    textAlign: 'center',
    fontSize: width * 0.04,
  },
  currency: {
    textAlign: 'center',
    fontSize: width * 0.04,
  },
  arrowImageContainer: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionArrow: {
    height: width * 0.05,
    width: '90%',
  },
  dateContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
  },
  date: {
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  reciever: {
    height: '100%',
    width: width * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  recieverLabelContainer: {
    width: width * 0.25,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recieverLabel: {
    fontSize: width * 0.04,
  },
  recieverImage: {
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: width * 0.1,
  },
  recieverName: {
    textAlign: 'center',
    fontSize: width * 0.04,
  },
});
