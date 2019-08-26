import React from 'react';
import { View , Dimensions , StyleSheet } from 'react-native';

import WalletCurrency from '../WalletCurrency/WalletCurrency'

export default class WalletCurrencies extends React.Component{

  render(){
     let currencies = this.props.currencies.map((currency, i) => {
      return <WalletCurrency data={currency.currency} key={i} />;
    });
    return(
          <View style={styles.currencies}>{currencies}</View>
      
    )
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  currencies: {
    marginBottom: width * 0.05,
  },
})