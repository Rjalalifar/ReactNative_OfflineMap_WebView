import React from "react";
import {View, Text, StyleSheet,Dimensions } from "react-native";
import Screen from "./../components/shared/Screen";
import Geolocation from '@react-native-community/geolocation';
import CustomButton from "../components/shared/CustomButton";
import { WebView } from 'react-native-webview';
import * as RNFS from 'react-native-fs';


var myLines = [{
  "type": "LineString",
  "coordinates": [
    [51.434000, 35.7538],
    [51.43352, 35.75449],
    [51.43552, 35.75249]
  ]
}];

var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};


const writeFile = ({params}) => {

  screenOptions= {
    headerShown: true}
  // alert(JSON.stringify(params.itemId));   

//   var path = RNFS.ExternalDirectoryPath + '/geojson.js';

//   console.log(path)

// RNFS.writeFile(path, 'var myLines='+JSON.stringify(myLines))
//  .then(() => console.log('FILE WRITTEN!'))
//  .catch((err) => console.log(err.message));
// //  alert('var myLines='+JSON.stringify(myLines))

//  RNFS.copyFileAssets('www/index.html', RNFS.ExternalDirectoryPath + '/index.html') .then(() => console.log('FILE WRITTEN!')) .catch((err) => console.log(err.message));

//  console.log(path)

}

const OfflineMap = () => {
    
    const geoLocation=()=>{
        Geolocation.getCurrentPosition(
            position => {
              const positions = JSON.stringify(position);
              alert(positions);
              alert(JSON.stringify(position.coords));
              
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );

          
    // writeFile(route)
    }

    

    return (
        <Screen style={{ alignItems: "center" }}>
            <Text>Cool Page Of Map</Text>
            <CustomButton title="Crisis" onPress={geoLocation} />

            <View style={styles.container}>
                
                <WebView
                source={{uri:RNFS.ExternalDirectoryPath+'/index.html'}}
                allowFileAccess={true}
                allowUniversalAccessFromFileURLs={true}
                style={styles.video}
                />
         </View>

        </Screen>


    );
};

export default OfflineMap;

var width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    video: {
      marginTop: 0,
      alignSelf: 'stretch',
      width: width,
      flex: 1
    }
  });