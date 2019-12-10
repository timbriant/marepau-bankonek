import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row"}}>
                    <View style={{width: 25, height: 50, }} />
                    <Button
                        icon={
                            <Icon
                                name="long-arrow-left"
                                size={45}
                                color={ this.props.color ? this.props.color : "white" }
                            />
                        }
                        type="clear"
                        onPress={() => this.props.navigation.navigate(this.props.previousPage)}
                    />
                    <View style={{width: 50, height: 50, }} />
                    <View style={{width: 50, height: 50, }} />
                </View>
                <View style={{flexDirection: "row", }}>
                    <View style={{width: 25, height: 50,}} />
                    <Text style={{
                            color:  this.props.color ? this.props.color : "white" ,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            paddingLeft: "4.5%",
                            bottom: 10,
                            fontSize: 21
                    }}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      marginBottom: 3,
      flex: 0,
      flexDirection: 'column',
    },
  });