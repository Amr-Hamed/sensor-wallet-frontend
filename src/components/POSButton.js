import React, { Component } from 'react';
import { Image  , StyleSheet , Text , TouchableOpacity,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const {width : WIDTH , height : Hieght} = Dimensions.get('window') ;




export default class POSButton extends Component {
  

  
  render() {
    return ( 
     
      <LinearGradient
          colors={['#5ecccf', '#45b3b5']}
          style={this.props.style}>

          <TouchableOpacity  style={{height: this.props.height ,borderRadius : 10 , display:'flex',alignItems:'center', justifyContent:"center"}}>
                  <Text style={styles.text} >{this.props.title}</Text>
          </TouchableOpacity>
          </LinearGradient> 
    );
  }
}


const styles = StyleSheet.create({
  
  text:{
    color:'#eee' ,
    fontSize: 20 ,
    fontWeight:'bold',
    alignSelf:'center',

  } ,
})
