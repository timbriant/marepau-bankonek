import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'


export default class DetailsOB extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          isEmailValid: true,
          isPasswordValid: true,
          isConfirmationValid: true,
          isSignUp: false,
          baseUrl: 'https://api.lobdev.fusionfabric.cloud/retail-banking/accounts/v1/',
          token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYTEJpUk5ZMkRvWS0wREVkQVBsMmJxUGpJWXZRUjVqalhBMmczZzczQzYwIn0.eyJqdGkiOiI2MjRmZTZkMy1jY2NkLTQyYTctOTMzZC1jYzdhZDcxYzc1YjUiLCJleHAiOjE1NTc5MTQ0MzcsIm5iZiI6MCwiaWF0IjoxNTU3OTEwODM3LCJpc3MiOiJodHRwczovL2FwaS5sb2JkZXYuZnVzaW9uZmFicmljLmNsb3VkL2xvZ2luL3YxIiwic3ViIjoiY2FmYzIzMDItYjM2My00ZmY2LTk0NGEtMjRmYTVkYjZlYzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiNTlmYjcxOWYtMThhNy00MDJhLWFlMGYtYWZhZjJjYjdkZTMxIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiOWZhYTNiNzctNWY5My00OWZjLWE0ZjgtMDA3YWRlOGZmNzgxIiwiYWNyIjoiMSIsInNjb3BlIjoicmV0YWlsLWJhbmtpbmctYWNjb3VudHMtdjEtNzQ4MGU4MjYtM2UzYy00MzIxLWE4MjAtNDY3YmU5YzUzMzEwIHJldGFpbC1iYW5raW5nLXBheW1lbnRzLXYxLWNhNjg1NDgzLThjMTEtNDc5OS1iZTM5LTY3NGQ0YzFhMTUyMyIsImFwcCI6IjU5ZmI3MTlmLTE4YTctNDAyYS1hZTBmLWFmYWYyY2I3ZGUzMSIsInRlbmFudCI6InNhbmRib3giLCJ1c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC01OWZiNzE5Zi0xOGE3LTQwMmEtYWUwZi1hZmFmMmNiN2RlMzEifQ.Z3m6m4ZHTyq0blMXqsAahQn4DqJ9zlJRd-ApKJnnyl1FwbncKT0Tyw2rcoXtJ5sY6ebqiVatstR1a_bH9O2SkpKN8BJLNvAr4O4oJgpT2qYNn_6JQ8gplssUTF0fwq92FdhKCmgGkxF6Aran63DedSUCgRKkJY1dsvuhBm8fBce7Mz8XWcnIA7-6QBtcOoJqjmiWCSD50sfPiPP8_hTKzzXSEBoAW2lm__8_AG67DSS6r0PzAhQRdTi3Lx73wk6RJOEGtvqveCEr_wZOwQlSN8TEhYz6sNEZdL9ZVuw_YWzjZQrolPgRJSiqo_Gydale3c94jbv-e8qKtjkdOUuiOQ'
        };
      }


    render() {
        const {
          isEmailValid,
          isPasswordValid,
          email,
          password,
        } = this.state;
        return (
          <ImageBackground 
              style={styles.container}
          >
            <ThemeProvider>
              <View style={{flex: 0, flexDirection: 'column'}}>
                <Header  
                  navigation={this.props.navigation} 
                  previousPage="ExistingCustomerOTP"
                  title={"Welcome, Dwight!"} 
                  color="black"
                />
              </View>
              <View style={styles.loginBody}>
                <Text style={{
                    marginBottom: 25,
                    flex: 0,
                    fontSize: 17,
                    backgroundColor: 'white',  
                }}
                >
                    Please verify the information below
                </Text>
                <Input
                    label="First and Last Name"
                    value="Dwight Sabado"
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
                    inputContainerStyle={{ borderRadius:10,backgroundColor:'white',borderBottomColor:'white'}}
                />  
                <Input
                    label="Email address"
                    value="john@doe.com"
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
                    inputContainerStyle={{borderRadius:10,backgroundColor:'white',borderBottomColor:'white'}}
                /> 
                <View style={{...styles.elementMargin, flex: 0, width: 325, backgroundColor: "white"}}>
                    <Text
                        style={{
                        fontWeight: "bold",
                        color: "#828E99",
                        fontSize: 16,
                        marginLeft: 10,
                        }}
                    >
                        Phone Number
                    </Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <PhoneInput 
                            ref='phone'
                            style={{ flex: 7, marginLeft: 10, paddingVertical: 15 }}
                            value="+1 777 8521 001"
                        />
                        <View style={{flex: 1,}} >
                            <Icon
                                name='check-circle'
                                type='awesome'
                                color='#2DC897'
                                iconStyle={{
                                    fontSize: 27,
                                    fontWeight: 'bold'
                                }}
                            />
                        </View>
                    </View>
                </View>
                <Input
                    multiline={true}
                    numberOfLines={4}
                    label="Address"
                    value="32# Olympia Street, White Plains, Barangay
                    Bel-Air, Makati, 1126, National Capital Region, Philippines "
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, justifyContent: 'center',backgroundColor:"white",}}
                    inputContainerStyle={{ borderRadius:10,backgroundColor:'white',borderBottomColor:'white'}}
                />
                <Button
                    title={"Confirm"}
                    buttonStyle={{
                        backgroundColor: '#2DC897',
                        borderRadius: 30,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{ flex: 0 ,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                    underlayColor="transparent"
                    onPress={() => this.props.navigation.navigate('TermsAndCondition')} 
                />    
              </View>
            </ThemeProvider>
          </ImageBackground>
        );
      }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#FCFCFF'
    },

    loginBody: {
        paddingTop: 0,
        paddingLeft: "10%",
        paddingRight: "10%",
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 15,
        // backgroundColor: "white",
        backgroundColor: "#FCFCFF"
      },

      elementMargin: {
          borderRadius: 4,
          borderWidth: 0.5,
          borderColor: '#d6d7da',  
          marginBottom: 25,
      },


  });