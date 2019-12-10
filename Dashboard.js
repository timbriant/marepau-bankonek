import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button} from 'react-native-elements';
import CreditCard from 'react-native-credit-card';
import Icon from 'react-native-vector-icons/FontAwesome';

function Separator() {
    return <View style={styles.separator} />;
}
export default class TermsAndCondtionsScreen extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
          user: this.props.navigation.getParam('user', 'NO-ID'),
          fbCredit: 0,
          baseUrl: 'https://api.preprod.fusionfabric.cloud/retail-banking/accounts/v1/accounts/0001000003001/balances',
          token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhOFBpUkNad2tRREFhMkluT044aWxRaFh1bl9rbEFTb19ZUHhxdEVUY3FJIn0.eyJqdGkiOiIyYzg2NzgxNi1kYTYwLTQzZGUtODBmYy03ZTZhOWE3ZWJkOWEiLCJleHAiOjE1NzYwMTIwNTksIm5iZiI6MCwiaWF0IjoxNTc2MDExNzU5LCJpc3MiOiJodHRwczovL2FwaS5wcmVwcm9kLmZ1c2lvbmZhYnJpYy5jbG91ZC9sb2dpbi92MSIsImF1ZCI6WyJiMmItYWNjb3VudC12MS1hYzM2ZWUwYS1iNjAyLTQyN2MtYjIzNS1lNDE4OWNlNTY1YmYiLCJyZXRhaWwtYmFua2luZy1hY2NvdW50cy1vcGVyYXRpb24tdjEtZjU0MTY2MmMtOWVjNy00NzEwLWFiMGYtZTRhMWQ0MzM2OTJjIiwicmV0YWlsLWJhbmtpbmctYWNjb3VudHMtdjEtNzQ4MGU4MjYtM2UzYy00MzIxLWE4MjAtNDY3YmU5YzUzMzEwIiwicmV0YWlsLWJhbmtpbmctcGF5bWVudHMtdjEtY2E2ODU0ODMtOGMxMS00Nzk5LWJlMzktNjc0ZDRjMWExNTIzIiwiYjJiLWdvb2QtZnVuZC12MS01MzA5ZGZhMi02MDg3LTQxOTMtOGI5ZC03MzcxNGY2Mjg0Y2YiLCJiMmItaW50ZXJuYWwtdHJhbnNmZXJzLXYxLTM0Mzg0NDIwLTE0ZGItNDZjOS1hMmYzLWExYTc1MzU2MGRkZiIsImIyYi1jdXN0b21lci1yZWFkLXYxLTg3MDM2NGJlLTFkYmUtNGZlNi1hMjAyLWZiYmM0OThlMGU3NCJdLCJzdWIiOiIwM2U0NzJhMS0wYjE5LTRhNDEtOWZiMy0xYTNiZWYwNTk2ODkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJiMWVmMWQ1Mi01YzIyLTRiYzAtOTY2OC1hODA2MDU1NjMxNzYiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJkM2Q1ZGQxMS1hNzkyLTQwYTUtOTU4MS1iNTUxNTcyNDA4NmMiLCJhY3IiOiIxIiwic2NvcGUiOiJvcGVuaWQgYjJiLWdvb2QtZnVuZC12MS01MzA5ZGZhMi02MDg3LTQxOTMtOGI5ZC03MzcxNGY2Mjg0Y2YgYjJiLWludGVybmFsLXRyYW5zZmVycy12MS0zNDM4NDQyMC0xNGRiLTQ2YzktYTJmMy1hMWE3NTM1NjBkZGYgcmV0YWlsLWJhbmtpbmctcGF5bWVudHMtdjEtY2E2ODU0ODMtOGMxMS00Nzk5LWJlMzktNjc0ZDRjMWExNTIzIHJldGFpbC1iYW5raW5nLWFjY291bnRzLW9wZXJhdGlvbi12MS1mNTQxNjYyYy05ZWM3LTQ3MTAtYWIwZi1lNGExZDQzMzY5MmMgYjJiLWFjY291bnQtdjEtYWMzNmVlMGEtYjYwMi00MjdjLWIyMzUtZTQxODljZTU2NWJmIGIyYi1jdXN0b21lci1yZWFkLXYxLTg3MDM2NGJlLTFkYmUtNGZlNi1hMjAyLWZiYmM0OThlMGU3NCByZXRhaWwtYmFua2luZy1hY2NvdW50cy12MS03NDgwZTgyNi0zZTNjLTQzMjEtYTgyMC00NjdiZTljNTMzMTAiLCJhcHAiOiJiMWVmMWQ1Mi01YzIyLTRiYzAtOTY2OC1hODA2MDU1NjMxNzYiLCJpcHdoaXRlbGlzdCI6IiIsInRlbmFudCI6ImVxdWF0aW9uLWRldiIsInVzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWIxZWYxZDUyLTVjMjItNGJjMC05NjY4LWE4MDYwNTU2MzE3NiJ9.duD48jDofbQKyPaCDPuJC-Z_kAXOR8RfNBhy7QKkb7beHZXtL4TH0rQVsBycH1GxbHwOBkVrZbXSErkKSXWV7mqhf6xY9zrFxf6Vv2mX06VBinm8t8uQw5ypwUlTsbvtvWYtGAoyqbLrxUlGI9d4dGj_UIcZ4Pz1WgKI54hDXXXCPD4xIYUCwcI6X_gAU064-QuqHiT2mKEM-dahzslEkyajb4g15vporHx_43MOG6VF-ah6sgcMsKidynEZCSQvcRS9wiG0rqM7mgRIvpOpRKKcQSDQSdemVjYqKu9Tf5ss2CQZAR-Y8gz4Iasq42Bdolcp3aLPQ3-cwIr4DrVanQ'
          ,dataSource: []
          ,accountID: ''
        };
    }

    componentDidMount(){
        if (this.state.user === "EU"){
            this.GetCurrentWalletEU('5def81aefd00a755000130be');
            this.GetFBCash();
        }
        else if (this.state.user === "UU"){
            this.GetCurrentWalletEU('5def81aefd00a755000130bf');
        }
        else if (this.state.user === "RU"){
            this.GetCurrentWalletEU('5def81aefd00a755000130c0');
        }
    }

    GetCurrentWalletEU = (link) => {
        var curBalance = null;
        var getRequest = new XMLHttpRequest();
        getRequest.withCredentials = true;
        getRequest.open("GET", "https://marepau-6431.restdb.io/rest/data");
        getRequest.setRequestHeader("content-type", "application/json");
        getRequest.setRequestHeader("x-apikey", "	3fd85f237efc9095e9f85488a6d2fed597ed8");
        getRequest.setRequestHeader("cache-control", "no-cache");
        getRequest.send(curBalance);

        getRequest.onreadystatechange = (e) => {
          if (getRequest.readyState !== 4) {
            return;
          }

          if (getRequest.status === 200) {``
            var myObj = JSON.parse(getRequest.responseText);
            let i = 0;
            while (i < myObj.length) {
              if (myObj[i]._id === link){
                curBalance = parseInt(myObj[i].amount, 10);
              }
              i++;
            }
            this.setState(() => (
                { 
                  fbCredit: curBalance,
            }))
          } else {
            console.warn('error');
          }
        };


    }

    GetFBCash(){
        let h = new Headers();
        h.append('Authorization', this.state.token); 
        h.append('Content-Type', 'application/json')
        
        let req = new Request(this.state.baseUrl, {
            headers: h,
            method: 'GET'
        });

        fetch(req)
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
            dataSource: responseJson.balances[3].amount.amount != null ? responseJson.balances[3].amount.amount : 300 ,
            accountID: responseJson.accountID != undefined ? responseJson.accountID : '322 2382 823 801'
            })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
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
                                FB Cash
                            </Text>
                        </View>
                        <View>
                            <Text>
                                FB Credit
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                                $ {this.state.dataSource}
                            </Text>
                        </View>
                        <View>
                        <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                                $ {this.state.fbCredit}
                            </Text>
                        </View>
                    </View>
                </View>
           
                <View style={{flex: 0.5, marginLeft: 15, marginBottom: 25}}>
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
                <Separator />
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
                                        onPress={() => this.props.navigation.navigate('InitialLending',{
                                            user: this.state.user
                                        })}
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
      },

      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 25
      },


  });