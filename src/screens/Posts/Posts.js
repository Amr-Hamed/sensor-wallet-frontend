import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native' ; 

import SurveyItem from '../../components/SurveyItem';

const baseUrl = 'https://bondnbeyond-apigateway.herokuapp.com/'; 

export default class Posts extends Component {

    constructor(props){
        super(props); 
        this.state = {
            Posts : []
        }
    }

    componentDidMount = async()=> {
        await fetch(`$`)
    }

    

    render() {
        return (
            <View style = {styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        alignItems : 'center' , 
        justifyContent : 'center'
    }
})