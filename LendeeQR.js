import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button } from 'react-native-elements';

export default class LendeeQR extends Component {

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
          <ImageBackground source={require('./assets/redOrange-straight.png')} 
              style={styles.container}
          >
            <ThemeProvider>
              <View style={styles.container}>
              </View>
            </ThemeProvider>
          </ImageBackground>
        );
      }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      opacity: 100,
      alignItems: 'center',
    },
    title: {
      flex: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '10%' 
    },
    appTitle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingLeft: "4.5%",
      bottom: 10
    },
    appLogo: {
      width: 150,
      height: 150,
    },
    loginBody: {
      flex: 10,
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      elevation: 30,
      opacity: 1,
    },
    
    help: {
      paddingTop: '2%',
      flex: 1,
      color: 'white'
    }
  
  });