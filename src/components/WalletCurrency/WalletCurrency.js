import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

export default class WalletCurrency extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Image
          source={{
            uri: this.props.data.imageURL,
          }}
          style={styles.currencyImage}
        />
        <View style={styles.currencyNameContainer}>
          <Text style={styles.currencyAbbreviation}>
            {this.props.data.name}
          </Text>
          <Text style={styles.currencyName}>{this.props.data.description}</Text>
        </View>
        <Text style={styles.currencyAmount}>
          {this.props.data.amount} {this.props.data.currencySymbol}
        </Text>
      </View>
    );
  }
}

let width = Dimensions.get("window").width;

let styles = StyleSheet.create({
  main: {
    width: width * 0.9,
    height: width * 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: width * 0.02,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 5
  },
  currencyImage: {
    height: width * 0.12,
    width: width * 0.12,
    borderRadius: width * 0.06,
    marginLeft: width * 0.02,
    resizeMode: "cover"
  },

  currencyNameContainer: {
    width: "50%"
  },
  currencyAbbreviation: {
    fontSize: width * 0.05,
    color: "#808080",
    fontWeight: "bold"
  },
  currencyName: {
    fontSize: width * 0.035
  },
  currencyAmount: {
    fontSize: width * 0.035,
    width: "30%",
    textAlign: "center"
  }
});