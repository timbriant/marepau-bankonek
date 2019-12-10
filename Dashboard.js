import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button} from 'react-native-elements';
import CreditCard from 'react-native-credit-card';
import Icon from 'react-native-vector-icons/FontAwesome';


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
              <View style={{flex: 0, marginBottom: 50, flexDirection: 'column'}}>
              </View>
              <View style={styles.loginBody}>
                <View style={{marginBottom: 25}}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text>
                                Spending Wallet
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Wallet
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text h3>
                                $ 926.21
                            </Text>
                        </View>
                        <View>
                            <Text h3>
                                $ 40
                            </Text>
                        </View>
                    </View>
                </View>
           
                <View style={{flex: 0.5, marginLeft: 15, marginBottom: 50}}>
                    <CreditCard
                        type={'visa'}
                        imageFront={require('./assets/card-front.png')}
                        imageBack={require('./assets/card-back.png')}
                        shiny={false}
                        bar={false}
                        number={"322 2382 823 8014"}
                        name={"Dwight Sabado"}
                        cvc={"**** 2382 823 8014"}
                        expiry={'0512'}
                    />
                </View>
                <View style={{ flex: 0,  }}>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 100, backgroundColor: 'lightgray', paddingTop: 15,  
                         borderRadius: 25}}>
                            <Button
                                icon={
                                    <Icon
                                        name="shopping-cart"
                                        size={50}
                                        marginVertical={30}
                                        color={ this.props.color ? this.props.color : "black" } 
                                    />
                                }   
                                
                                type="clear"
                            />
                        </View>
                        <View style={{...styles.homeIcons, ...styles.homeButtons }}>
                            <Button
                                icon={
                                    <Icon
                                        name="money"
                                        size={50}
                                        marginVertical={30}
                                        color={ this.props.color ? this.props.color : "black" }
                                    />
                                
                                }
                                type="clear"
                            />
                        </View>
                        <View style={{...styles.homeIcons, ...styles.homeButtons }}>
                            <Button
                                icon={
                                    <Icon
                                        name="handshake-o"
                                        size={50}
                                        color={ this.props.color ? this.props.color : "black" }
                                        onPress={() => this.props.navigation.navigate(this.props.previousPage)}

                                    />
                                }
                                type="clear"
                            />
                        </View>
                    </View>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,  }}>
                            <Text style={styles.homeLabels}>
                                Pay Bills
                            </Text>
                        </View>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,  }}>
                            <Text style={styles.homeLabels}>
                                Send Money
                            </Text>
                        </View>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,   }}>
                            <Text style={styles.homeLabels}>
                                Lending
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                    <View style={{...styles.homeIcons, ...styles.homeButtons }}>
                        <Button
                                icon={
                                    <Icon
                                        name="dollar"
                                        size={50}
                                        marginVertical={20}
                                        color={ this.props.color ? this.props.color : "black" }
                                    />
                                }
                                type="clear"
                        />
                        </View>
                        <View style={{...styles.homeIcons, ...styles.homeButtons }}>
                            <Button
                                icon={
                                    <Icon
                                        name="gift"
                                        size={50}
                                        marginVertical={20}
                                        color={ this.props.color ? this.props.color : "black" }
                                    />
                                }
                                type="clear"
                            />
                        </View>
                        <View style={{...styles.homeIcons, ...styles.homeButtons }}>
                            <Button
                                    icon={
                                        <Icon
                                            name="user-plus"
                                            size={50}
                                            marginVertical={20}
                                            color={ this.props.color ? this.props.color : "black" }
                                        />
                                    }
                                    type="clear"
                                />
                        </View>
                    </View>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,  }}>
                            <Text style={styles.homeLabels}>
                               Remittance
                            </Text>
                        </View>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,  }}>
                            <Text style={styles.homeLabels}>
                                Rewards
                            </Text>
                        </View>
                        <View style={{...styles.homeIcons, flex: 0, width: 100 , height: 25,   }}>
                            <Text style={styles.homeLabels}>
                                Referrals
                            </Text>
                        </View>
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
      backgroundColor: '#FCFCFF'
    },

    loginBody: {
        paddingTop: 0,
        paddingLeft: "10%",
        paddingRight: "10%",
        flex: 8,
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
      homeIcons: {
        marginHorizontal: 5,
      },
      homeButtons: {
        flex: 0, 
        width: 100 ,
        height: 100,
        backgroundColor: 'lightgray', 
        paddingTop: 15,
        borderRadius: 25
      },
      homeLabels: {
          textAlign: 'center',
          fontWeight: 'bold'
      }


  });