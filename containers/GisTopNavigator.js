import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
// import Toast from "react-native-tiny-toast";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "./../components/shared/Screen";
// import { useDispatch } from "react-redux";
import {MyCoursesScreen} from "./../screens";
import {GisScreen} from './../screens'
// import { loadingToast } from "../utils/toasts";
// import { getCourses } from "./../actions/index";

const TopTab = createMaterialTopTabNavigator();

const GisTopNavigator = () => {
    // const dispatch = useDispatch();

    useEffect(() => {
        // try {
        //     const fetchData = async () => {
        //         loadingToast("در حال بارگذاری...");
        //         dispatch(getCourses());
        //         Toast.hide();
        //     };
        //     fetchData();
        // } catch (err) {
        //     console.log(err);
        //     Toast.hide();
        // }
    }, []);

    return (
        <Screen>
            <TopTab.Navigator
                initialRouteName="AllCourses"
                backBehavior="none"
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                    labelStyle: {
                        fontFamily: "ih",
                        fontSize: RFPercentage(1.5),
                    },
                    style: { backgroundColor: "#f8f4f4" },
                }}
            >
                <TopTab.Screen
                    name="MyCourses"
                    component={MyCoursesScreen}
                    options={{ tabBarLabel: "Spatial Data" }}
                />
                <TopTab.Screen
                    name="GisScreen"
                    component={GisScreen}
                    options={{ tabBarLabel: "Layers" }}
                />
                
            </TopTab.Navigator>
        </Screen>
    );
};

export default GisTopNavigator;
