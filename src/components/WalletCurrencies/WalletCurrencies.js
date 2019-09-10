import React from 'react';
import { View , Dimensions , StyleSheet , Text } from 'react-native';

import WalletCurrency from '../WalletCurrency/WalletCurrency'

export default class WalletCurrencies extends React.Component{

  render(){
      if (this.props.currencies.length !== 0 ){

      
     let currencies = this.props.currencies.map((currency, i) => {
      return <WalletCurrency data={currency} key={i} />;
    });
    return(
          <View style={styles.currencies}>{currencies}</View>
      
    )
  } else  {
    return (
      <View>
        <Text style = {{alignSelf : 'center'}}>Sorry But Your Wallet is Empty </Text>
      </View>
    )
  }
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  currencies: {
    marginBottom: width * 0.05,
  },
})