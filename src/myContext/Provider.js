import React, { Component } from 'react'
import { Text, View } from 'react-native'

export const MyContext = React.createContext();

export default class Provider extends Component {

    state = {
        userID : '123' , 
        userName : 'Shikabala', 
        userCountry:'Egypt',
        userImageURL : 'https://www.kinkylittleboots.com/wp-content/uploads/2016/11/hrithik-roshan-upcoming-movies-list-release-date-mtwiki-2016.jpg'
    }

    action ={

        changeUserID : (userID) => {
            this.setState({userID})
        } , 
        changeUserName : (userName) => {
            this.setState({userName}) ; 
            console.log('Changed')
        } , 
        changeUserImageURL : (userImageURL) => {
            this.setState({userImageURL})
        }
    }

    render() {
        return (
            <MyContext.Provider value={{state : this.state ,  action : this.action }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
