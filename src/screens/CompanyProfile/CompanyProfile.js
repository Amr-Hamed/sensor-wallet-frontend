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
import SurveySlideItem from '../../components/SurveySlideItem';

const coreApi = "http://demo9744643.mockable.io/"

export default class CompanyProfile extends Component {


  constructor(props){
    super(props);

    this.state = {
      clientName : '' , 
      clinetImage : 'https://cdn1.iconfinder.com/data/icons/business-power/32/business_avatar_company_hierarchy_level_position_post-512.png'
    }
    // fetching Client Data From API
    fetch(`https://demo9744643.mockable.io/clients/${this.props.navigation.getParam('brandID')}`)
    .then(res => res.json())
    .then(res=>{
      this.setState({
        clientName : res.clientName , 
        clientImage : res.clientImage
      })
    }) 


  }

  goToSurvey = (surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration })
  }
  goToService = () => {
    this.props.navigation.navigate('ServiceDetails')
  }
  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG />
          <CompanyProfileCard
            cardTitle={this.state.clientName}
            cardNote="Since 1971"
            coverUrl={this.state.clientImage}
            profilePicUrl={this.state.clientImage}
          />

          <Content padder>
            <Text style={styles.title}>BIO</Text>
            <Text>UserQRCode
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. orum.
            </Text>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <POSButton style={styles.btn} title="Contact" />
              <POSButton style={styles.btn} title="More" />
            </View>

            <VoucherBtn points="30" value="25" style={{ marginVertical: 10 }} />

            <Content padder>
            <Text style={styles.sideTitle}>Company Surveys For You : </Text>

            <ScrollView horizontal={true}>
              <SurveySlideItem
                cover="https://www.pcclean.io/wp-content/gallery/messi-hd-wallpapers/Messi-HD-78.jpg"
                brandName="Barcelona"
                title="Leonel Messi"
                time="10 min"
                points="100"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://wallpapersite.com/images/wallpapers/cristiano-ronaldo-2560x1440-hd-17168.jpg"
                brandName="Juventus"
                title="Ronaldo"
                time="7 min"
                points="77"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://images2.alphacoders.com/961/961964.jpg"
                brandName="Liverpool"
                title="Mohamed Salah"
                time="11 min"
                points="111"
                pressed={this.goToSurvey}
              />
            </ScrollView>
          </Content>

            <View style={styles.services}>
              <Text style={styles.sideTitle}>Services</Text>
              <Service serviceName="UI/UX" pressed = {this.goToService} />
              <Service serviceName="Development" pressed = {this.goToService}/>
              <Service serviceName="Coffee" pressed = {this.goToService} />
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
