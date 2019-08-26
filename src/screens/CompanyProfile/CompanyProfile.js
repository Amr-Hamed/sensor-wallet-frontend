import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
};

import POSHeader from '../../components/POSHeader';
import POSButton from '../../components/POSButton';
import CompanyProfileCard from '../../components/CompanyProfileCard';
import VoucherBtn from '../../components/VoucherBtn';
import RelatedSurvey from '../../components/RelatedSurvey';
import Service from '../../components/Service';
import RoundedBG from '../../components/RoundedBG';

export default class CompanyProfile extends Component {
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
            <Text style={styles.title}>BIO</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. orum.
            </Text>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <POSButton style={styles.btn} title="Contact" />
              <POSButton style={styles.btn} title="More" />
            </View>

            <VoucherBtn points="30" value="25" style={{ marginVertical: 10 }} />

            <View>
              <Text style={styles.sideTitle}>SURVEYS</Text>
              <RelatedSurvey
                brandName="Costa Coffee"
                surveyTitle="New Coffee"
                points="30"
              />
              <RelatedSurvey
                brandName="Costa Coffee"
                surveyTitle="New Drink "
                points="50"
              />
            </View>

            <View style={styles.services}>
              <Text style={styles.sideTitle}>Services</Text>
              <Service serviceName="UI/UX" />
              <Service serviceName="Development" />
              <Service serviceName="Coffee" />
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  btn: {
    width: 0.35 * WIDTH,
    margin: 20,
    borderRadius: 10,
  },
  sideTitle: {
    marginVertical: 16,
    fontSize: 20,
    marginLeft: 10,
  },
  services: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
