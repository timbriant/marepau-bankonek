import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';


export default class InitialRemit extends Component {
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

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
  
      return (
     
     <ThemeProvider style={styles.container}>
        <View style={{flex: 0, flexDirection: 'column'}}>
            <Header  
                navigation={this.props.navigation} 
                previousPage="Dashboard"
                title={"Remittance Transaction"} 
                color="black"
            />
        </View>
        <View style={styles.loginBody}>
         
            <TouchableOpacity
                style={{...styles.button,  backgroundColor: '#2DC897',}}
                onPress={() => this.props.navigation.navigate('RemitScanQR')}
            >   
                    <View style={{flex: 2.5, width: 50, height: 130, backgroundColor: '',paddingVertical: 15, paddingHorizontal: 15}} >
                        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                            Request Encashment
                        </Text>
                        <Text style={{color: 'white', fontSize: 15}}>
                            Scan the QR code of the remittance center
                        </Text>
                    </View>
                    <View style={{flex: 1, width: 50, height: 125, paddingTop: 25, paddingLeft: 10, backgroundColor: '',}} >
                        <Image
                            source={require('./assets/Bank.png')}
                            style={styles.appLogo}
                        />
                    </View>
            </TouchableOpacity>

        
            <TouchableOpacity
                style={{...styles.button,  backgroundColor: '#8676FB',}}
                onPress={() => this.props.navigation.navigate('RemitStatus')}
            >   
                    <View style={{flex: 2.5, width: 50, height: 130, backgroundColor: '',paddingVertical: 15, paddingHorizontal: 15}} >
                        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                            Remittance Status
                        </Text>
                        <Text style={{color: 'white', fontSize: 15}}>
                            View the status of your remittance
                        </Text>
                    </View>
                    <View style={{flex: 1, width: 50, height: 125, paddingTop: 25, paddingLeft: 10, backgroundColor: '',}} >
                        <Image
                            source={require('./assets/Bank.png')}
                            style={styles.appLogo}
                        />
                    </View>
            </TouchableOpacity>

            
        </View>
      
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FCFCFF'
    },
  
  button: {
    alignItems: 'center',
    padding: 10,
    flex: 0,
    flexDirection: 'row',
    borderRadius: 25,
    marginBottom: 15
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
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
  appLogo: {
    width: 70,
    height: 70,
  },
})
