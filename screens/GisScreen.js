import React,{useState,useEffect} from "react";
import {View, Text, StyleSheet } from "react-native";
import Screen from "./../components/shared/Screen";
import Geolocation from '@react-native-community/geolocation';
import CustomButton from "../components/shared/CustomButton";
import { WebView } from 'react-native-webview';
import * as RNFS from 'react-native-fs';
import { useDispatch } from "react-redux";
import { loadingToast } from "../utils/toasts";
import { getLayers } from "../actions";


var myLines = [{
  "type": "LineString",
  "coordinates": [
    [51.434000, 35.7538],
    [51.43352, 35.75449],
    // [51.43552, 35.75249],
  ]
}];

var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};


const writeFile = ({params}) => {
  // alert(JSON.stringify(params.itemId));   

  var path = RNFS.ExternalDirectoryPath + '/geojson.js';
  var path = RNFS.ExternalDirectoryPath + '/geojson1.js';

RNFS.unlink(path)

RNFS.writeFile(path, 'var myLines='+JSON.stringify(myLines))
 .then(() => console.log('FILE WRITTEN!'))
 .catch((err) => console.log(err.message));
//  alert('var myLines='+JSON.stringify(myLines))
RNFS.unlink(RNFS.ExternalDirectoryPath + '/index.html')
RNFS.unlink(RNFS.ExternalDirectoryPath + '/index1.html')

 RNFS.copyFileAssets('www/index.html', RNFS.ExternalDirectoryPath + '/index.html') .then(() => {
  console.log('FILE WRITTEN!')
  RNFS.copyFileAssets('www/index1.html', RNFS.ExternalDirectoryPath + '/index1.html') .then(() => console.log('FILE WRITTEN!')) .catch((err) => console.log(err.message));


}) .catch((err) => console.log(err.message));


 console.log(path)

}

const GisScreen = ({navigation,route}) => {

const [getUrl, setUrl] = useState(RNFS.ExternalDirectoryPath+'/index.html')

    const geoLocation=()=>{
        Geolocation.getCurrentPosition(
            position => {
              // const positions = JSON.stringify(position);
              // alert(positions);
              // alert(JSON.stringify(position.coords));
              
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );

          setUrl('https://www.google.com')

          // navigation.navigate("CourseDetails");  
          writeFile(route)




    }


    const reffereshviews=()=>{
      setUrl(RNFS.ExternalDirectoryPath+'/index1.html')

  }

    const dispatch = useDispatch();
    const fetchLayerHandler=()=>{

        dispatch(getLayers());


    // console.log(fetchlayers)
    
  }


  let WebViewRef;

    return (
        <Screen style={{ alignItems: "center" }}>
            <Text>Geospatial data page</Text>
            <CustomButton title="Coordinate" onPress={geoLocation} />
            <CustomButton title="Necessary Dtata" onPress={fetchLayerHandler} />
            <CustomButton title="Reload Page" onPress={() => { WebViewRef && WebViewRef.reload(); }} />
            <CustomButton title="Change Page" onPress={reffereshviews} />

            <View style={styles.container}>
                {console.log(getUrl)}
                <WebView
                 ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
                source={{uri:getUrl}}
                allowFileAccess={true}
                allowUniversalAccessFromFileURLs={true}
                style={styles.video}
                startInLoadingState={true}
                />
         </View>

        </Screen>


    );
};

export default GisScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    video: {
      marginTop: 20,
      maxHeight: 500,
      width: 320,
      flex: 1
    }
  });