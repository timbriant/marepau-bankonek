import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button } from 'react-native-elements';

export default class HomeScreen extends Component {

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
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
      }
    
      validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    
      login() {
        const { email, password } = this.state;
        this.setState({ isLoading: true });
        // Simulate an API call
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
            isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
          });
        }, 1500);
      }
    
      signUp() {
        this.setState({isSignUp: true});
      }

    render() {
        const {
          isEmailValid,
          isPasswordValid,
          email,
          password,
        } = this.state;
        return (
          <ImageBackground source={require('./assets/bg.png')} 
              style={styles.container}
          >
          
            <ThemeProvider>
              <View style={styles.container}>
                  <View style={styles.title} >
                    <Text h4 style={styles.appTitle}>
                      Finally, banks are now digital and social 
                    </Text>
                    <Image
                      source={require('./assets/AppLogoCircle.png')}
                      style={styles.appLogo}
                    />
                  </View>
                  <View style={!this.state.isSignUp ? styles.loginBody : [styles.loginBody, {flex: 15}]} >
                    {this.state.isSignUp && (
                       <Input
                       placeholder='Confirm Password'
                       leftIcon={{ 
                         type: 'font-awesome', 
                         name: 'lock',
                       }}
                       blurOnSubmit={true}
                       ref={input => (this.passwordInput = input)}
                         onSubmitEditing={() =>
                             this.login()
                       }
                       secureTextEntry={true}
                       inputStyle={{ marginLeft: 10, }}
                       onChangeText={password => this.setState({ password })}
                       errorMessage={
                         isPasswordValid
                           ? null
                           : 'Please enter at least 8 characters'
                       }
                       containerStyle={{flex: 2, width: 300, justifyContent: 'center', marginBottom: '5%'}}
                        /> 
                    )}
                    <Button
                      title={this.state.isSignUp ? "Sign Up" : "Create free account"}
                      buttonStyle={{
                        backgroundColor: '#2DC897',
                        borderRadius: 30,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                      containerStyle={{ flex: 1 ,marginVertical: 100, height: 50, width: 350, marginBottom: '0%' }}
                      underlayColor="transparent"
                      onPress={() => this.props.navigation.navigate('Register')}
                    />
                    <Button
                      title={"Connect with Facebook"}
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: '#4666D5',
                        borderRadius: 30,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                      containerStyle={{ flex: 1 ,marginTop: 0, height: 50, width: 350, marginBottom: '10%' }}
                      underlayColor="transparent"
                      onPress={this.login}
                    />
                     <Button 
                      title={"Already have an account?" }
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{ 
                        backgroundColor: 'transparent',
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontSize: 16, fontWeight: '100' , color: 'white'}}
                      underlayColor="transparent"
                      onPress={!this.state .isSignUp ? this.signUp : password => this.setState({ isSignUp: false })}
                    />
                  </View> 
                  <View style={styles.help} >
                      <Button
                      title="Login"
                      containerStyle={{ flex: 1 ,marginTop: 1, height: 50, width: 350, marginBottom: '0%',}}
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        borderRadius: 30,
                        backgroundColor: "rgba(52, 52, 52, 0.8)"
                      }}
                      titleStyle={{ fontSize: 22, fontWeight: '100', }}
                    /> 
                  </View>
                  <View style={{flex: 1}}></View>
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