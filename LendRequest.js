import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'


export default class LendRequest extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: this.props.navigation.getParam('user', 'NO-ID'),
        };
        console.log(this.state.user)
      }

      componentDidMount() {
        console.log("state" + this.state.user)
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
                  title={"Loan Request"} 
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
                    Please put the agreed upon details below
                </Text>
                <Input
                    label="Amount"
                    value="100"
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
                    inputContainerStyle={{ borderRadius:10,backgroundColor:'white',borderBottomColor:'white'}}
                />  
                <Input
                    label="Interest Rate"
                    value="$10 per month"
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
                    inputContainerStyle={{ borderRadius:10,backgroundColor:'white',borderBottomColor:'white'}}
                />  
                <Input
                    label="Due Date"
                    value="10/10/2019"
                    rightIcon={{ 
                        type: 'font-awesome', 
                        name: 'check-circle',
                        color: '#2DC897'
                    }}
                    containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
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
                    onPress={() => this.props.navigation.navigate('LendeeQR')} 
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