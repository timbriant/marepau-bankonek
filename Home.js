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
                      source={require('./assets/compass.png')}
                      style={{ 
                        width: 100, 
                        height: 100,
                        }
                       }
                    />
                  </View>
                  <View style={!this.state.isSignUp ? styles.loginBody : [styles.loginBody, {flex: 15}]} >
                    <Input
                      label="Email Address"
                      placeholder='Email Address'
                      leftIcon={{ 
                        type: 'font-awesome', 
                        name: 'envelope',
                      }}
                      autoFocus={false}
                      keyboardType="email-address"
                      ref={input => (this.emailInput = input)}
                      onSubmitEditing={() => this.passwordInput.focus()}
                      onChangeText={email => this.setState({ email })}
                      errorMessage={
                        isEmailValid ? null : 'Please enter a valid email address'
                      }
                      inputStyle={{ marginLeft: 10,}}
                      containerStyle={{flex: 2, width: 300, justifyContent: 'center', }}
                    /> 
                    <Input
                      label="Password"
                      placeholder='Password'
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
                      containerStyle={{flex: 2, width: 300, justifyContent: 'center', marginVertical: '5%'}}
                    /> 
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
                      title={this.state.isSignUp ? "Sign Up" : "Log in"}
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: '#0E69CC',
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                      containerStyle={{ flex: 1 ,marginVertical: 10, height: 50, width: 200, marginBottom: '10%' }}
                      underlayColor="transparent"
                      onPress={this.login}
                    />
                     <Button
                      title={!this.state.isSignUp ? "Create an account" : "Log In" }
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: 'transparent',
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontSize: 14, fontWeight: '100' , color: '#3E3EC9'}}
                      underlayColor="transparent"
                      onPress={!this.state.isSignUp ? this.signUp : password => this.setState({ isSignUp: false })}
                    />
                  </View>
                  <View style={styles.help} >
                      <Button
                      title="Need help?"
                      loading={false}
                      loadingProps={{ size: 'small', color: 'white' }}
                      buttonStyle={{
                        backgroundColor: 'transparent',
                        borderRadius: 5,
                      }}
                      titleStyle={{ fontSize: 22, fontWeight: '100' }}
                      underlayColor="transparent"
                      onPress={() => this.props.navigation.navigate('Login',{
                        baseUrl: this.state.baseUrl,
                        token: this.state.token
                    })}
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
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '5%',
      
    },
    appTitle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingLeft: "5%",
    },
    loginBody: {
      flex: 8,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      elevation: 30,
      opacity: 1
    },
    
    help: {
      paddingTop: '2%',
      flex: 1,
      color: 'white'
    }
  
  });