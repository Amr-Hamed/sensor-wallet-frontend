import React from 'react';

import { View, StyleSheet } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default class Dropdown extends React.Component {
  state = {
    placeholder: 'Restaurant',
    items: [{label:'Restaurants', value:'Restaurants'}, {label:'Coffeshops', value:'Coffeshops'},{label:'Supermarkets', value:'Supermarkets'}],
    selectedItem: 'Restaurants',
  };

  render() {
    return (
      <RNPickerSelect
        placeholder={this.state.placeholder}
        items={this.state.items}
        onValueChange={value => {
          this.setState({
            selectedItem: value,
          });
        }}
        style={{
          inputIOS: {
            fontSize: 17,
            paddingVertical: 12,
            paddingHorizontal: 10,
            // borderWidth: 1,
            borderColor: 'gray',
            // borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            // borderWidth: 0.5,
            // borderColor: 'eggplant',
            // borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
        }}
        value={this.state.selectedItem}
        useNativeAndroidPickerStyle={false}
        
      />
    );
  }
}

