import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin';

import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserCircle,
  faLock,
  faEnvelope,
  faUser,
  faPhone,
  faCalendarWeek,
  faCheckCircle,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

import { Icon, Spinner } from 'native-base';

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
    let day = new Date().getDate(); //Current Date
    let month = new Date().getMonth(); //Current Month
    let year = new Date().getFullYear(); //Current Year
    let today = `${year}-${month}-${day}`;

    this.state = {
      choosnTab: 'signIn',
      today,
      birthDate: today,
      gender: 'male',
      showActivity: false,
    };
  }

  commingSoon = () => {
    alert('This feature will be available soon!');
  };

  selectTab = selectedTab => {
    this.setState({
      choosnTab: selectedTab,
    });
  };

  setDate = birthDate => {
    this.setState({
      birthDate,
    });
  };

  signInPressed = () => {
    if (this.state.email) {
      if (this.state.password) {
        this.setState({
          showActivity: true,
        });
        fetch('https://bondnbeyond-apigateway.herokuapp.com/enduser/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            passWord: this.state.password,
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.code === 200) {
              this.setState({
                showActivity: false,
              });

              this.props.navigation.navigate('Profile', {
                userID: responseJson.data.userID,
              });
            } else if (responseJson.code === 500) {
              alert('Server Error!');
              this.setState({
                showActivity: false,
              });
            } else if (responseJson.code === 401) {
              alert("Sorry, credentials don't match records!");
              this.setState({
                showActivity: false,
              });
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        alert('Please enter your password!');
      }
    } else {
      alert('Please enter your email!');
    }
  };

  validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  validatePhone = phone => {
    if(isNaN(phone)){
      return false;
    }
    let reg = /^[01]?[0125]\d{9}$/
    if(reg.test(phone)){
      return true;
    }else{
      return false;
    }
  }

  singUpClicked = () => {
    let userDetails = {
      userDetails: {
        fullName: this.state.fullName,
        userName: this.state.userName,
        email: this.state.email,
        phone: this.state.phone,
        birthDate: this.state.birthDate,
        gender: this.state.gender.charAt(0),
        passWord: this.state.password,
        signUpDate: this.state.today,
        fawryWalletID: 100,
        image: '',
      },
    };
    if (this.state.email) {
      if (this.validateEmail(this.state.email))
        if (this.state.fullName) {
          if (this.state.userName) {
            if (this.state.phone) {
              if(this.validatePhone(this.state.phone))
              if (this.state.birthDate) {
                if (this.state.gender) {
                  if (this.state.password) {
                    if (this.state.password.length >= 6) {
                      if (this.state.confirmPassword) {
                        if (
                          this.state.password === this.state.confirmPassword
                        ) {
                          this.setState({
                            showActivity: true,
                          });
                          fetch(
                            'https://bondnbeyond-apigateway.herokuapp.com/enduser/signup',
                            {
                              method: 'POST',
                              headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(userDetails),
                            }
                          )
                            .then(response => response.json())
                            .then(responseJson => {
                              if (responseJson.code == 200) {
                                // alert('User created successfully!');
                                this.setState({
                                  showActivity: false,
                                });
                                this.props.navigation.navigate('Profile', {
                                  userID: responseJson.userID,
                                });
                              } else if (responseJson.code == 500) {
                                alert(responseJson.msg);
                              }
                            })
                            .catch(error => {
                              console.error(`e: ${error}`);
                            });
                        } else {
                          alert('Sorry, password confirmed wrongly!');
                          this.setState({
                            showActivity: false,
                          });
                        }
                      } else {
                        alert('Please confirm your password!');
                        this.setState({
                          showActivity: false,
                        });
                      }
                    } else {
                      alert('Password should be 6 characters or more!');
                      this.setState({
                        showActivity: false,
                      });
                    }
                  } else {
                    alert('Please enter your password!');
                    this.setState({
                      showActivity: false,
                    });
                  }
                } else {
                  alert('Please pick your gender!');
                  this.setState({
                    showActivity: false,
                  });
                }
              } else {
                alert('Please pick your birthdate!');
                this.setState({
                  showActivity: false,
                });
              }else{
                alert('Sorry, invalid phone number format!');
              this.setState({
                showActivity: false,
              });
              }
            } else {
              alert('Please enter your mobile!');
              this.setState({
                showActivity: false,
              });
            }
          } else {
            alert('Please enter your username!');
            this.setState({
              showActivity: false,
            });
          }
        } else {
          alert('Please enter your full name!');
          this.setState({
            showActivity: false,
          });
        }
      else {
        alert('Sorry, invalid email format!');
        this.setState({
          showActivity: false,
        });
      }
    } else {
      alert('Please enter your email!');
      this.setState({
        showActivity: false,
      });
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/images/loginBackground.png')}
        style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView style={styles.mainContainer}>
            <Image
              source={require('../../../assets/images/sensesLogo.png')}
              style={styles.logo}
            />
            <Text style={styles.loginText1}> Welcome to </Text>
            <View style={styles.textContainer}>
              <Text style={styles.loginText2}> Sensor </Text>
              <Text style={styles.loginText3}> P.O.S </Text>
            </View>
            <View style={styles.socialMediaLoginContainer}>
              <View style={styles.socialMediaLogin}>
                <TouchableOpacity onPress={this.commingSoon}>
                  <Icon name="logo-google" style={styles.googleIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.commingSoon}>
                  <Icon name="logo-facebook" style={styles.facebookIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.commingSoon}>
                  <Icon name="logo-twitter" style={styles.twitterIcon} />
                </TouchableOpacity>
              </View>
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
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      style={styles.tabIcon}
                      icon={faEnvelope}
                      size={20}
                      color={'gray'}
                    />
                    <TextInput
                      placeholder="Email"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      onChangeText={email => this.setState({ email })}
                      value={this.state.email}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faLock} color={'gray'} size={20} />
                    <TextInput
                      placeholder="Password"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      secureTextEntry={true}
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                    />
                  </View>
                  <View style={styles.submitButtonContainer}>
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={this.signInPressed}>
                      <Text style={styles.submitButtonText}>SIGN IN</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>
                      FORGOT PASSWORD?
                    </Text>
                  </View>
                  <View style={[styles.container, styles.horizontal]}>
                    <Spinner
                      size="large"
                      color="#45b3b5"
                      style={{
                        display: this.state.showActivity ? 'flex' : 'none',
                      }}
                    />
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
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color={'gray'}
                      size={20}
                    />
                    <TextInput
                      placeholder="Email"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      onChangeText={email => this.setState({ email })}
                      value={this.state.email}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faUser} color={'gray'} size={20} />
                    <TextInput
                      placeholder="Full Name"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      onChangeText={fullName => this.setState({ fullName })}
                      value={this.state.fullName}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      color={'gray'}
                      size={20}
                    />
                    <TextInput
                      placeholder="Username"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      onChangeText={userName => this.setState({ userName })}
                      value={this.state.userName}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faPhone} color={'gray'} size={20} />
                    <TextInput
                      keyboardType="numeric"
                      placeholder="Mobile"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      onChangeText={phone => this.setState({ phone })}
                      value={this.state.phone}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      icon={faCalendarWeek}
                      color={'gray'}
                      size={20}
                    />
                    <DatePicker
                      placeholder="Birthdate"
                      placeholderTextColor="gray"
                      style={[
                        styles.userInput,
                        { justifyContent: 'center', alignItems: 'center' },
                      ]}
                      date={this.state.birthDate}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      minDate="1950-01-01"
                      maxDate={this.state.birthDate}
                      onDateChange={birthDate => this.setDate(birthDate)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      icon={faVenusMars}
                      color={'gray'}
                      size={20}
                    />
                    <View style={styles.genderContainer}>
                      <TouchableOpacity
                        style={styles.genderOption}
                        onPress={() => this.setState({ gender: 'male' })}>
                        <View style={styles.genderRadio}>
                          {this.state.gender === 'male' && (
                            <View style={styles.genderRadionChecked} />
                          )}
                        </View>
                        <Text style={styles.genderLabel}> Male </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.genderOption}
                        onPress={() => this.setState({ gender: 'female' })}>
                        <View style={styles.genderRadio}>
                          {this.state.gender === 'female' && (
                            <View style={styles.genderRadionChecked} />
                          )}
                        </View>
                        <Text style={styles.genderLabel}> Female </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faLock} color={'gray'} size={20} />
                    <TextInput
                      placeholder="Password"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      secureTextEntry={true}
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={'gray'}
                      size={20}
                    />
                    <TextInput
                      placeholder="Confirm Password"
                      style={styles.userInput}
                      placeholderTextColor="gray"
                      secureTextEntry={true}
                      onChangeText={confirmPassword =>
                        this.setState({ confirmPassword })
                      }
                      value={this.state.confirmPassword}
                    />
                  </View>
                  <View style={styles.submitButtonContainer}>
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={this.singUpClicked}>
                      <Text style={styles.submitButtonText}>SIGN UP</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.container, styles.horizontal]}>
                    <Spinner
                      size="large"
                      color="#45b3b5"
                      style={{
                        display: this.state.showActivity ? 'flex' : 'none',
                      }}
                    />
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

let width = Dimensions.get('window').width;

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
    width: width * 0.15,
    height: width * 0.15,
    marginTop: width * 0.15,
    marginLeft: width * 0.08,
  },
  textContainer: {
    flexDirection: 'row',
  },
  loginText1: {
    color: 'white',
    fontSize: width * 0.08,
    marginLeft: width * 0.08,
  },
  loginText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.13,
    marginLeft: width * 0.08,
  },
  loginText3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.05,
    marginTop: width * 0.08,
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: width * 0.05,
  },
  signInSelectedTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.06,
  },
  signUpSelectedTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.06,
  },
  signUpTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.06,
    opacity: 0.5,
  },
  signInTab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.06,
    opacity: 0.5,
  },
  loginTextInputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: width * 0.03,
    marginBottom: width * 0.06,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: width * 0.12,
    width: '90%',
    padding: width * 0.02,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#636363',
    marginTop: '2%',
  },
  userInput: {
    marginLeft: width * 0.03,
    height: '100%',
    width: '90%',
  },
  genderContainer: {
    marginLeft: width * 0.03,
    height: '100%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  genderOption: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderRadio: {
    height: width * 0.04,
    width: width * 0.04,
    borderRadius: width * 0.02,
    borderWidth: width * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderRadionChecked: {
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width * 0.01,
    backgroundColor: '#25babc',
  },
  genderLabel: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
  },
  submitButtonContainer: {
    height: width * 0.12,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '2%',
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
    fontSize: width * 0.06,
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: width * 0.06,
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialMediaLoginContainer: {
    width: width,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.05,
  },
  socialMediaLogin: {
    width: width * 0.5,
    height: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  googleIcon: {
    fontSize: width * 0.09,
    color: '#dd4b39',
  },
  facebookIcon: {
    fontSize: width * 0.09,
    color: '#4267b2',
  },
  twitterIcon: {
    fontSize: width * 0.09,
    color: '#00aced',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});