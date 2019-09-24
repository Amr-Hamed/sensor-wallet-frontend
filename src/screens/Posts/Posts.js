import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native' ; 

import ResourceItem from '../../components/ResourceItem';

const baseUrl = 'http://192.168.1.39:4000/'; 

export default class Posts extends Component {

    constructor(props){
        super(props); 
        this.state = {
            Posts : []
        }
    }

    componentDidMount = async()=> {
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