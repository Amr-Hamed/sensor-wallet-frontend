import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

import SocialMediaLogin from "../../components/SocialMediaLogin/SocialMediaLogin";

import DatePicker from "react-native-datepicker";
import { RadioButton } from "react-native-paper";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faLock,
  faEnvelope,
  faUser,
  faPhone,
  faCalendarWeek,
  faCheckCircle,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";

import { Icon } from "native-base";

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
    let day = new Date().getDate(); //Current Date
    let month = new Date().getMonth(); //Current Month
    let year = new Date().getFullYear(); //Current Year
    let today = `${year}-${month}-${day}`;

    this.state = {
      choosnTab: "signIn",
      today,
      birthDate: today,
      gender: "male"
    };
  }

  selectTab = selectedTab => {
    this.setState({
      choosnTab: selectedTab
    });
  };

  setDate = birthDate => {
    this.setState({
      birthDate
    });
  };

  signInPressed = () => {
    if (this.state.email) {
      if (this.state.password) {
        fetch("https://bondnbeyond-apigateway.herokuapp.com/enduser/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.state.email,
            passWord: this.state.password
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.code === 200) {
              alert("Logged in successfully!");
            } else if (responseJson.code === 500) {
              alert("Server Error!");
            } else if (responseJson.code === 401) {
              alert("Sorry, credentials don't match records!");
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        alert("Please enter your password!");
      }
    } else {
      alert("Please enter your email!");
    }
  };

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
        image: "image"
      }
    };
    if (this.state.email) {
      if (this.state.fullName) {
        if (this.state.userName) {
          if (this.state.phone) {
            if (this.state.birthDate) {
              if (this.state.gender) {
                if (this.state.password) {
                  if (this.state.password.length >= 6) {
                    if (this.state.confirmPassword) {
                      if (this.state.password === this.state.confirmPassword) {
                        fetch(
                          "https://bondnbeyond-apigateway.herokuapp.com/enduser/signup",
                          {
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify(userDetails)
                          }
                        )
                          .then(response => response.json())
                          .then(responseJson => {
                            if (responseJson.code == 200) {
                              alert("User created successfully!");
                            } else if (responseJson.code == 500) {
                              alert("Server Error!");
                            }
                          })
                          .catch(error => {
                            console.error(`e: ${error}`);
                          });
                      } else {
                        alert("Sorry, password confirmed wrongly!");
                      }
                    } else {
                      alert("Please confirm your password!");
                    }
                  } else {
                    alert("Password should be 6 characters or more!");
                  }
                } else {
                  alert("Please enter your password!");
                }
              } else {
                alert("Please pick your gender!");
              }
            } else {
              alert("Please pick your birthdate!");
            }
          } else {
            alert("Please enter your mobile!");
          }
        } else {
          alert("Please enter your username!");
        }
      } else {
        alert("Please enter your full name!");
      }
    } else {
      alert("Please enter your email!");
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/loginBackground.png")}
        style={styles.container}
      >
        <ScrollView style={styles.mainContainer}>
          <Image
            source={require("../../../assets/images/sensesLogo.png")}
            style={styles.logo}
          />
          <Text style={styles.loginText1}>Welcome to</Text>
          <View style={styles.textContainer}>
            <Text style={styles.loginText2}>Sensor</Text>
            <Text style={styles.loginText3}>P.O.S</Text>
          </View>
          <View style={styles.socialMediaLoginContainer}>
            <View style={styles.socialMediaLogin}>
              <Icon name="logo-google" style={styles.googleIcon} />
              <Icon name="logo-facebook" style={styles.facebookIcon} />
              <Icon name="logo-twitter" style={styles.twitterIcon} />
            </View>
          </View>
          {this.state.choosnTab === "signIn" && (
            <View style={styles.main}>
              <View style={styles.tabsContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.signInSelectedTab}
                    onPress={() => this.selectTab("signIn")}
                  >
                    SIGN IN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={styles.signUpTab}
                    onPress={() => this.selectTab("signUp")}
                  >
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginTextInputContainer}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      style={styles.tabIcon}
                      icon={faEnvelope}
                      size={25}
                      color={"gray"}
                    />
                  </View>
                  <TextInput
                    placeholder="Email"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon icon={faLock} color={"gray"} size={25} />
                  </View>
                  <TextInput
                    placeholder="Password"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </View>
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.signInPressed}
                  >
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
          {this.state.choosnTab === "signUp" && (
            <View style={styles.main}>
              <View style={styles.tabsContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.signInTab}
                    onPress={() => this.selectTab("signIn")}
                  >
                    SIGN IN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={styles.signUpSelectedTab}
                    onPress={() => this.selectTab("signUp")}
                  >
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginTextInputContainer}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color={"gray"}
                      size={25}
                    />
                  </View>
                  <TextInput
                    placeholder="Email"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon icon={faUser} color={"gray"} size={25} />
                  </View>
                  <TextInput
                    placeholder="Full Name"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={fullName => this.setState({ fullName })}
                    value={this.state.fullName}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      color={"gray"}
                      size={25}
                    />
                  </View>
                  <TextInput
                    placeholder="Username"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={userName => this.setState({ userName })}
                    value={this.state.userName}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon icon={faPhone} color={"gray"} size={25} />
                  </View>
                  <TextInput
                    placeholder="Mobile"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={phone => this.setState({ phone })}
                    value={this.state.phone}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      icon={faCalendarWeek}
                      color={"gray"}
                      size={25}
                    />
                  </View>
                  <DatePicker
                    placeholder="Birthdate"
                    placeholderTextColor="#8c8c8c"
                    style={[
                      styles.userInput,
                      { justifyContent: "center", alignItems: "center" }
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
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      icon={faVenusMars}
                      color={"gray"}
                      size={25}
                    />
                  </View>
                  <View style={styles.genderContainer}>
                    <TouchableOpacity
                      style={styles.genderOption}
                      onPress={() => this.setState({ gender: "male" })}
                    >
                      <View style={styles.genderRadio}>
                        {this.state.gender === "male" && (
                          <View style={styles.genderRadionChecked} />
                        )}
                      </View>
                      <Text style={styles.genderLabel}> Male </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.genderOption}
                      onPress={() => this.setState({ gender: "female" })}
                    >
                      <View style={styles.genderRadio}>
                        {this.state.gender === "female" && (
                          <View style={styles.genderRadionChecked} />
                        )}
                      </View>
                      <Text style={styles.genderLabel}> Female </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon icon={faLock} color={"gray"} size={25} />
                  </View>
                  <TextInput
                    placeholder="Password"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={"gray"}
                      size={25}
                    />
                  </View>
                  <TextInput
                    placeholder="Confirm Password"
                    style={styles.userInput}
                    placeholderTextColor="#8c8c8c"
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
                    onPress={this.singUpClicked}
                  >
                    <Text style={styles.submitButtonText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    );
  }
}

let width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
    resizeMod5: "contain"
  },
  mainContainer: {
    backgroundColor: "#00000099",
    height: "100%"
  },
  logo: {
    width: width * 0.18,
    height: width * 0.18,
    marginTop: width * 0.18,
    marginLeft: width * 0.045
  },
  loginText1: {
    color: "white",
    fontSize: width * 0.1,
    marginLeft: width * 0.045,
    marginTop: width * 0.02,
    includeFontPadding: false
  },
  textContainer: {
    flexDirection: "row",
    marginTop: width * 0.02
  },
  loginText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.16,
    marginLeft: width * 0.045,
    lineHeight: width * 0.16
  },
  loginText3: {
    color: "white",
    fontSize: width * 0.05,
    marginTop: width * 0.07,
    marginLeft: width * 0.02
  },
  socialMediaLoginContainer: {
    width: width,
    height: width * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.05
  },
  socialMediaLogin: {
    width: width * 0.5,
    height: width * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  googleIcon: {
    fontSize: width * 0.09,
    color: "#dd4b39"
  },
  facebookIcon: {
    fontSize: width * 0.09,
    color: "#4267b2"
  },
  twitterIcon: {
    fontSize: width * 0.09,
    color: "#00aced"
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: width * 0.05
  },
  signInSelectedTab: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.05,
    width: width * 0.3,
    textAlign: "right"
  },
  signUpSelectedTab: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.05,
    width: width * 0.3,
    textAlign: "left"
  },
  signUpTab: {
    color: "#ffffffcc",
    fontSize: width * 0.05,
    width: width * 0.3,
    textAlign: "left"
  },
  signInTab: {
    color: "#ffffffcc",
    fontSize: width * 0.05,
    width: width * 0.3,
    textAlign: "right"
  },
  loginTextInputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: width * 0.03,
    marginBottom: width * 0.06
  },
  inputContainer: {
    backgroundColor: "white",
    height: width * 0.15,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#8c8c8c"
  },
  inputIconContainer: {
    alignItems: "center",
    width: "20%"
  },
  tabIcon: {},
  userInput: {
    height: "100%",
    width: "80%"
  },
  genderContainer: {
    height: "100%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  genderOption: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  genderRadio: {
    height: width * 0.04,
    width: width * 0.04,
    borderRadius: width * 0.02,
    borderWidth: width * 0.005,
    justifyContent: "center",
    alignItems: "center"
  },
  genderRadionChecked: {
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width * 0.01,
    backgroundColor: "#25babc"
  },
  genderLabel: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01
  },
  submitButtonContainer: {
    height: width * 0.15,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  submitButton: {
    backgroundColor: "#25babc",
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonText: {
    fontSize: width * 0.05,
    color: "white",
    fontWeight: "bold"
  },
  forgotPasswordContainer: {
    marginTop: width * 0.06
  },
  forgotPasswordText: {
    color: "white",
    fontWeight: "bold"
  }
});
