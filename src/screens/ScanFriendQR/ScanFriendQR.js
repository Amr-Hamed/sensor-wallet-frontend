import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  DeviceEventEmitter,
  Dimensions,
  
  TouchableHighlight,
  Alert
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import Modal from 'react-native-modal';


import POSButton from '../../components/POSButton';
import TransactionConfirm from '../../components/TransactionConfirm';


import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class ScanFriendQR extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    showConfirmDialog: false,
    user: {
      id: this.props.navigation.getParam('userID'),
      username: this.props.navigation.getParam('userName'),
      points: this.props.navigation.getParam('senses')
    },
    userPoints: this.props.navigation.getParam('senses'),
    transactionInfo:{}
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  setModalVisible(visible) {
    this.setState({ showConfirmDialog: visible });
  }

  backToProfile = () => {
    this.setState({
      showConfirmDialog : false
    })
    this.props.navigation.goBack();
  }


  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Requesting for camera permission</Text>
        </View>
      )
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Container>

        <Content padder
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#333'
          }}>

          <Card>
            <CardItem>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={styles.barCodeContainer}
              />
            </CardItem>
        
          </Card>
        </Content >
      </Container>
    );
  }

  // Send Notification
  sendNotification = token => {

    token = token.replace(/\s/g, '');
    let url = 'https://exp.host/--/api/v2/push/send';
    let url2 = "https://320c36a815.to.intercept.rest";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          to: token,
          sound: 'default',
          body: `Hello , ${this.state.user.username} send 5 points to you`,
        },
      ]),
    });
    // .then(response )
  };

  // Scan QR Code
  handleBarCodeScanned = ({ type, data }) => {
    let url = 'https://bondserver.herokuapp.com/';
    let transactionInfo = JSON.parse(data);
    transactionInfo['senderID'] = this.state.user.id;
    transactionInfo['senderSenses'] = this.state.user.points;

    this.setState({ scanned: true});
    this.props.navigation.navigate('Profile',{
      showTransConfirmDialog : true , transactionInfo , 
      test : 'backFrom'
    })
   

    // alert(JSON.stringify(transactionInfo))
    // send Notification to Recieved user
    // this.sendNotification(transactionInfo['token']);

    // if (transactionInfo.senderSenses <= this.state.userPoints) {
    //   alert(
    //     'user points : ' +
    //       this.state.user.points +
    //       ' price : ' +
    //       transactionInfo.points
    //   );
    //   alert(`Success send Points to ${transactionInfo['username']}`);

    //   // Decrease user points According to transactions
    //   DeviceEventEmitter.emit('updateUserPoints', {
    //     points: this.state.userPoints - transactionInfo.points,
    //   });
    //   this.setState({
    //     userPoints: this.state.userPoints - transactionInfo.points,
    //   });

    //   fetch(url + 'exPoints', {
    //     method: 'POST',

    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },

    //     body: JSON.stringify(transactionInfo),
    //   })
    //     .then(() => this.props.navigation.navigate('Profile', {}))

    //     .catch(err => {
    //       console.log(err);
    //     });
    // } else {
    //   console.log(
    //     'user points : ' +
    //       this.state.user.points +
    //       ' price : ' +
    //       transactionInfo.points
    //   );
    //   alert('Sorry but Your Credit is less that product price ');
    // }
  };
}

const styles = StyleSheet.create({
  barCodeContainer: {
    width: 500,
    height: 500,
  },
  
});