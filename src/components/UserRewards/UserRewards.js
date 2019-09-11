import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

// import { Item, Icon, Picker } from 'native-base';
// import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';

import UserReward from '../UserReward/UserReward';

export default class UserRewards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'All',
      rewards: this.props.rewards,
      displayed: this.props.rewards,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rewards: nextProps.rewards,
      displayed: nextProps.rewards,
    });
  }

  selectItem = async item => {
    if (item === 'All') {
      await this.setState({
        displayed: this.state.rewards,
        selectedItem: item,
      });
    } else if (item === 'Rewards') {
      let displayed = this.state.rewards.filter(element => {
        return element.receiverUserName == this.props.userName;
      });
      await this.setState({
        selectedItem: item,
        displayed,
      });
    } else if (item === 'Redeems') {
      let displayed = this.state.rewards.filter(element => {
        return element.receiverUserName != this.props.userName;
      });
      await this.setState({
        selectedItem: item,
        displayed,
      });
    }
  };

  render() {
    let rewards = this.state.displayed.map((reward, i) => {
      return <UserReward data={reward} key={i} userName={this.props.userName}/>;
    });
    return (
      <View style={styles.main}>
        <RNPickerSelect
          onValueChange={item => this.selectItem(item)}
          placeholder={{
            label: 'Filter rewards',
            value: '',
          }}
          items={[
            { label: 'All', value: 'All' },
            { label: 'Rewards', value: 'Rewards' },
            { label: 'Redeems', value: 'Redeems' },
          ]}
          style={styles.dropdown}
        />
        <View style={styles.rewards}>{rewards}</View>
      </View>
    );
  }
}

let width = Dimensions.get('window').width;
let styles = StyleSheet.create({
  rewards: {
    marginBottom: width * 0.05,
  },
  dropdown: {
    width: width * 0.5,
    height: width * 0.3,
  },
});
