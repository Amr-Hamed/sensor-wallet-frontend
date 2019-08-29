import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserCircle,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { Icon } from 'native-base';

export default class AssetExample extends React.Component {
  state = {
    choosnTab: 'signIn',
  };
  


  selectTab = selectedTab => {
    this.setState({
      choosnTab: selectedTab,
    });
  };
 
  render() {
    return (
      <ImageBackground
        source={require('../../../assets/images/loginBackground.png')} 
        style={styles.container}>
        <View style={styles.mainContainer}>
          <Image
            source={require('../../../assets/images/sensesLogo.png')}
            style={styles.logo}
          />
          <Text style={styles.loginText1}> Welcome to </Text>
          <View style={styles.textContainer}>
            <Text style={styles.loginText2}> Sensor </Text>
            <Text style={styles.loginText3}> P.O.S </Text>
          </View>
          {this.state.choosnTab === 'signIn' && (
            <View style={styles.main}>
              <View style={styles.tabsContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.signInSelectedTab}
                    onPress={() => this.selectTab('signIn')}>
                    SIGN IN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={styles.signUpTab}
                    onPress={() => this.selectTab('signUp')}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginTextInputContainer}>
                <View style={styles.usernameInputContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIcon}
                    icon={faUserCircle}
                    color={'gray'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Username"
                    style={styles.usernameInput}
                  />
                </View>
                <View style={styles.passwordInputContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIcon}
                    icon={faLock}
                    color={'gray'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Password"
                    style={styles.passwordInput}
                  />
                </View>
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity style={styles.submitButton} onPress={()=> this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.submitButtonText}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPasswordText}>
                    FORGOT PASSWORD?
                  </Text>
                </View>
              </View>
            </View>
          )}
          {this.state.choosnTab === 'signUp' && (
            <View style={styles.main}>
              <View style={styles.tabsContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.signInTab}
                    onPress={() => this.selectTab('signIn')}>
                    SIGN IN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={styles.signUpSelectedTab}
                    onPress={() => this.selectTab('signUp')}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginTextInputContainer}>
                <View style={styles.emailInputContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIcon}
                    icon={faEnvelope}
                    color={'gray'}
                    size={20}
                  />
                  <TextInput placeholder="Email" style={styles.emailInput} />
                </View>
                <View style={styles.usernameInputContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIcon}
                    icon={faUserCircle}
                    color={'gray'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Username"
                    style={styles.usernameInput}
                  />
                </View>
                <View style={styles.passwordInputContainer}>
                  <FontAwesomeIcon
                    style={styles.headerIcon}
                    icon={faLock}
                    color={'gray'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Password"
                    style={styles.passwordInput}
                  />
                </View>
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          <SocialMediaLogin icons={['logo-google' , 'logo-facebook' , 'logo-twitter']}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
    resizeMode: 'contain',
  },
  mainContainer: {
    backgroundColor: '#00000080',
    height: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 40,
    marginLeft: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText1: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  loginText2: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20,
    padding: 0,
  },
  loginText3: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: -5,
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop : 30
  },
  signInSelectedTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUpSelectedTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUpTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    opacity: 0.5,
  },
  signInTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    opacity: 0.5,
  },
  loginTextInputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,

  },
  usernameInputContainer: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#636363',
    borderBottomWidth: 1,
    marginTop: '1%',
    marginBottom: '1%',
  },
  emailInputContainer: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#636363',
    borderBottomWidth: 1,
  },
  usernameInput: {
    marginLeft: 10,
  },
  emailInput: {
    marginLeft: 10,
  },
  passwordInputContainer: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    marginLeft: 10,
  },
  submitButtonContainer: {
    height: 50,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop : '2%'
  },
  submitButton: {
    backgroundColor: '#25babc',
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
