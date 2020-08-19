import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData:'',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
          hasCameraPermissions: status === "granted",
          buttonState: 'clicked',
          scanned: false
        });
      }
      handleBarCodeScanned = async({type, data})=>{
        this.setState({
          scanned: true,
          scannedData: data,
          buttonState: 'normal'
        });
      }

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.getCameraPermissions} ><Text>SCAN</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center'
    }
})