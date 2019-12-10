import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';


export default class TermsAndCondtionsScreen extends Component {

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
                  title={"One last thing"} 
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
                    Terms of Service
                </Text>

                <SafeAreaView style={styles.containerArea}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.  {'\n'}{'\n'}{'\n'} 

                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id
                        est laborum.  {'\n'}{'\n'}{'\n'} 

                        Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas ipsum.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget,
                        tempor sit amet, ante eu libero sit amet quam. {'\n'}{'\n'}{'\n'} 

                        Aenean ultricies mi vitae est. Mauris placerat
                        eleifend leo. Quisque sit est et sapien ullamcorper.

                        Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas ipsum.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget,
                        tempor sit amet, ante eu libero sit amet quam. {'\n'}{'\n'}{'\n'} 

                        Aenean ultricies mi vitae est. Mauris placerat
                        eleifend leo. Quisque sit est et sapien ullamcorper.
                        </Text>
                    </ScrollView>
                </SafeAreaView>  
                <Button
                    title={"Agree"}
                    buttonStyle={{
                        backgroundColor: '#2DC897',
                        borderRadius: 30,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{ flex: 1 ,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                    underlayColor="transparent"
                    onPress={() => this.props.navigation.navigate('Success')}  
                />  
                 <Button
                    title={"Decline"}
                    buttonStyle={{
                        backgroundColor: '#EB658D',
                        borderRadius: 30,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{ flex: 1 ,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                    underlayColor="transparent"
                  
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

      containerArea: {
        flex: 4,
        marginBottom: 30
      },
      scrollView: {
        marginHorizontal: 0,
      },
      text: {
        fontSize: 15,
        color: "#606060"
      },


  });