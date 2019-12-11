import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class RemitScanQR extends Component {
    onSuccess = (e) => {
        this.props.navigation.navigate('RemittanceRequest')
      }

 render() {
   return (
     
     <ThemeProvider style={styles.container}>
        <View style={{flex: 0, flexDirection: 'column'}}>
        </View>
         
        <QRCodeScanner 
             onRead={this.onSuccess}
             topContent={
               <Text style={{textAlign: 'center'}}>
                  <Text style={styles.textBold}> Scan your your remittance center's {"\n"} QR code to instantly get the details! </Text>
              </Text>
            }
        />
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

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
})
