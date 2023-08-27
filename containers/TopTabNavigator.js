import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Toast from "react-native-tiny-toast";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "./../components/shared/Screen";
import { useDispatch } from "react-redux";
import {
    NewCoursesScreen,
    TopCoursesScreen,
    CoursesScreen,
} from "./../screens";
import { loadingToast } from "../utils/toasts";
import { getCourses } from "./../actions/index";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const fetchData = async () => {
                loadingToast("Loading...");
                dispatch(getCourses());
                Toast.hide();
            };
            fetchData();
        } catch (err) {
            console.log(err);
            Toast.hide();
        }
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
                    name="AllCourses"
                    component={CoursesScreen}
                    options={{ tabBarLabel: "Validating Crisis" }}
                />
                <TopTab.Screen
                    name="NewCourses"
                    component={NewCoursesScreen}
                    options={{ tabBarLabel: "First Form" }}
                />
                <TopTab.Screen
                    name="TopCourses"
                    component={TopCoursesScreen}
                    options={{ tabBarLabel: "Commands" }}
                />
            </TopTab.Navigator>
        </Screen>
    );
};

export default TopTabNavigator;
