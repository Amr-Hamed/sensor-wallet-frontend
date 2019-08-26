import React, { Component } from 'react';
import { Image  , StyleSheet , Text , Dimensions} from 'react-native';
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

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

const imgPathes = {
  senses : require('../../assets/images/sensesLogo.png'),

}

export default class SideLogoCard extends Component {
  

  
  render() {
    return ( 
      <>
           <Content padder style={{paddingHorizontal:0.05*WIDTH}} >
          <Card style={{ borderRadius: 25 }}>
        
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.props.coverUrl,
                }}
                style={styles.surveyCover}
              />
            </CardItem>
        
          <CardItem style={{alignSelf:'center'}}>
          <Card 
            style={styles.profilePicture}> 
            <CardItem>
              <Body > 
                <Image
                  source={{
                    uri:this.props.profilePicUrl,
                  }}
                  style={styles.brandLogo} 
                />
              </Body>
            </CardItem>

          </Card>   
          </CardItem>
          <CardItem style={{ alignSelf: 'center' , flexDirection:'column' }}> 
              <Text style={styles.brandName}>{this.props.cardTitle}</Text>
             <Text style={{ color: 'grey' }}>{this.props.cardNote}</Text>
          </CardItem> 
          </Card> 
          </Content>
        </>
     
    );
  }
}


const styles = StyleSheet.create({
   surveyCover: {
    height: 200,
    width: null,
    flex: 1,
    margin: 15,
    borderRadius: 10,
  },
  brandName: {
    fontSize: 20,
  },
  brandLogo: { borderRadius: 20, height: 150, width: 150, alignSelf: 'center' },

  profilePicture: {
    alignSelf: 'center',
    width: 0.5 * WIDTH,
    height: null,
    marginTop: -0.2 * Hieght,
    borderRadius: 15,
    borderColor: '#eee',
    borderWidth: 27,
  },
})
