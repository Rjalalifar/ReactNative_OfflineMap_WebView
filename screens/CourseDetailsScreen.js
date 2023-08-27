import React from "react";
import {ScrollView} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";
import CustomButton from "../components/shared/CustomButton";
import * as RNFS from 'react-native-fs';
import { useDispatch } from "react-redux";
import { getLayers } from "../actions";

const CourseDetailsScreen = ({ navigation, route }) => {
    if (!route.params.course) return null;

    navigation.setOptions({
        headerShown: true,
        title: route.params.course.title,
        headerTitleStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage(2.5),
            color: "white",
        },
        headerStyle: {
            backgroundColor: "tomato",
        },
    });
    const { _id, name, price, image, description } = route.params.course;
    console.log(image)
    const dispatch = useDispatch();

    const getData= () =>{
        dispatch(getLayers());

        var myLines = [{
            "type": "LineString",
            "coordinates": [
              [51.434000, 35.7538],
              [51.43352, 35.75449],
            //   [51.43552, 35.75249],
            ]
          }];

          const DirectoryPath= RNFS.ExternalDirectoryPath +'/images';
          RNFS.mkdir(DirectoryPath)
          .then(() => console.log('directory created!'))
          .catch((err) => console.log(err.message));


          var path = RNFS.ExternalDirectoryPath + '/geojson.js';
        
          RNFS.writeFile(path, 'var myLines='+JSON.stringify(myLines))
           .then(() => console.log('myLines WRITTEN!'))
           .catch((err) => console.log(err.message));

           RNFS.copyFileAssets('www/leaflet.js', RNFS.ExternalDirectoryPath + '/leaflet.js') .then(() => {
            console.log('lafletjs WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/leaflet.css', RNFS.ExternalDirectoryPath + '/leaflet.css') .then(() => {
            console.log('lafletcss WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/images/layers-2x.png', RNFS.ExternalDirectoryPath + '/images/layers-2x.png') .then(() => {
            console.log('layers-2x WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/images/layers.png', RNFS.ExternalDirectoryPath + '/images/layers.png') .then(() => {
            console.log('layers WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/images/marker-icon-2x.png', RNFS.ExternalDirectoryPath + '/images/marker-icon-2x.png') .then(() => {
            console.log('marker-icon-2x WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/images/marker-icon.png', RNFS.ExternalDirectoryPath + '/images/marker-icon.png') .then(() => {
            console.log('marker-icon WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

          RNFS.copyFileAssets('www/images/marker-shadow.png', RNFS.ExternalDirectoryPath + '/images/marker-shadow.png') .then(() => {
            console.log('marker-shadow WRITTEN!')
     
          }) .catch((err) => console.log(err.message));
  
  
           RNFS.copyFileAssets('www/index.html', RNFS.ExternalDirectoryPath + '/index.html') .then(() => {
            console.log('index WRITTEN!')
     
          }) .catch((err) => console.log(err.message));

    }

    const zoomToAcc= () =>{
       
        

          var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.43552, 35.75249]
            }
        };
          
          var path = RNFS.ExternalDirectoryPath + '/Acc.js';

          console.log(RNFS.ExternalDirectoryPath)

          RNFS.writeFile(path, 'var Acc='+JSON.stringify(geojsonFeature))
          .then(() => console.log('Acc WRITTEN!'))
          .catch((err) => console.log(err.message));


       

    }
    

    return (
        <ScrollView style={styles.container}>
            <Card
                title={name}
                price={price}
                time="15:00:00"
                image={image}
                teacher="Rasoul Jalalifar"
                courseInfo={name}
            />
         <CustomButton title="Show On The Map" onPress={()=>{
             navigation.navigate("OfflineMap", {
                // course: item,
            })
            zoomToAcc()
         }} />

        <CustomButton title="Get Data" onPress={
                    getData()
                } />
        </ScrollView>
    );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "#f8f4f4",
    },
});
