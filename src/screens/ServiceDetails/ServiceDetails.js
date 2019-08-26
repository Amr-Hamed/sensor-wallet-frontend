import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Content,
  Container,
  Left,
  Right,
  Body,
  Button,
  ListItem,
  Icon,
} from 'native-base';

import POSHeader from '../../components/POSHeader';
import POSButton from '../../components/POSButton';
import CompanyProfileCard from '../../components/CompanyProfileCard';
import VoucherBtn from '../../components/VoucherBtn';
import RelatedSurvey from '../../components/RelatedSurvey';
import Service from '../../components/Service';
import RoundedBG from '../../components/RoundedBG';
import TableHead from '../../components/TableHead';
import TableItem from '../../components/TableItem';


const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class SideLogoCard extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG />
          <CompanyProfileCard
            cardTitle="Costa Caffee"
            cardNote="Since 1971"
            coverUrl="http://cierlica.com/wp-content/uploads/2017/03/CostaCoffee_cover.jpg"
            profilePicUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1200px-CostaLogo.svg.png"
          />
          <Content padder>
            <VoucherBtn points="40" value="30" />
            <View style={styles.details}>
              <Text style={styles.sideTitle}>SURVICE DETAILS</Text>
              <Right>
                <Button transparent>
                  <Text style={{ color: '#45b3b5', fontSize: 15 }}>
                    {' '}
                    Back To Service{' '}
                  </Text>
                </Button>
              </Right> 
            </View>
            <Content padder>
              <Text style={styles.serviceTitle}> Full Ecommerse App </Text>
              <Text style={styles.serviceDetails}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop{' '}
              </Text>
            </Content>

            <View style={styles.table}>
              <TableHead />
              <TableItem left="NesCafe" midel="5:10 day" right="$150"/>
              <TableItem left="Cafe Mix" midel="3:7 day" right="$130"/>
              <TableItem left="NesCafe" midel="5:10 day" right="$150"/>

 
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sideTitle: {
    marginVertical: 16,
    fontSize: 18,
    marginLeft: 10,
  },
  details: {
    marginVertical: 20,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  serviceTitle: {
    alignSelf: 'center',
    marginVertical: 18,
    fontSize: 20,
  },
  serviceDetails: {
    alignSelf: 'center',
    fontSize: 14,
  },
  table: {
    width: WIDTH - 20,
    alignSelf: 'center',
    marginVertical: 10,
  },

});
