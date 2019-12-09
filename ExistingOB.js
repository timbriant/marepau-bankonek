import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal'
import PhoneInput from 'react-native-phone-input'


export default class ExistingCustomerScreen extends Component {

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
          <ImageBackground source={require('./assets/bg-2.png')} 
              style={styles.container}
          >
            <ThemeProvider>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Header  
                  navigation={this.props.navigation} 
                  previousPage="Register"
                  title="Time for the Future of Banking"
                />
                <View style={styles.loginBody}>
                  <View style={{flex: 1,}} >
                  <Text style={{
                        color: '#8A8A8A',
                        textAlign: 'center',
                        bottom: 10,
                        fontWeight: "bold",
                        fontSize: 20,
                    }}>
                        Existing Customer
                    </Text>
                  </View>
                  <View style={{alignItems: "flex-start"}}>
                    <View style={styles.inputBody}>
                      <Text style={{flex: 3}}>
                          Welcome! 
                      </Text>
                      <Text style={{flex: 5}}>
                          Place the email address that is tied to your bank account
                      </Text>
                      <Input
                        label="Email Address"
                        placeholder='Email Address'
                        leftIcon={{ 
                          type: 'font-awesome', 
                          name: 'envelope',
                        }}
                        autoFocus={false}
                        keyboardType="email-address"
                        inputStyle={{ marginLeft: 10,}}
                        containerStyle={{flex: 0, width: 300 , justifyContent: 'center',backgroundColor:"white",}}
                        inputContainerStyle={{borderRadius:10, backgroundColor:'white',borderBottomColor:'white'}}
                      />   
                  </View>
                
                
                  <Button
                      title={this.state.isSignUp ? "Sign Up" : "Send Verification Code"}
                      buttonStyle={{
                        backgroundColor: '#2DC897',
                        borderRadius: 30,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                      containerStyle={{ flex: 5 ,marginVertical: 150, height: 50, width: 350, marginBottom: '0%' }}
                      underlayColor="transparent"
                      onPress={() => this.props.navigation.navigate('ExistingCustomerOTP')}
                    />  
                  </View>
                </View>
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
    },
  
    loginBody: {
      paddingTop: 30,
      paddingLeft: "10%",
      paddingRight: "10%",
      flex: 8,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      elevation: 30,
      borderRadius: 75,
      backgroundColor: "rgba(1000, 1000, 1000, 0.9)"
    },
    
    inputBody: {
      flex: 10,
      justifyContent: 'flex-start',
      top: 50,
      marginBottom: 100
    }

  });