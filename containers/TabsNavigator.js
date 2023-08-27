import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "./../screens/AccountScreen";
import CoursesScreen from "./../screens/CoursesScreen";
import MyCoursesScreen from "./../screens/MyCoursesScreen";
import TopTabNavigator from './TopTabNavigator'
import GisTopNavigator from './GisTopNavigator'
// import OfflineMap from "../screens/OfflineMap";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Courses"
            screenOptions={({ route }) => ({
                headerShown: false ,
                tabBarIcon: ({ focused, color, size }) => {
                    
                    let iconName;

                    if (route.name === "Courses") {
                        iconName = focused ? "wiper-wash-alert" : "school";
                    } else if (route.name === "Account") {
                        iconName = focused
                            ? "account-circle"
                            : "account-circle-outline";
                    } else if (route.name === "MyCourses") {
                        iconName = "wifi-strength-lock-outline";
                    }

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
                activeBackgroundColor: "lightcyan",
                labelStyle: {
                    fontFamily: "ih",
                    fontSize: 13,
                },
            }}
        >
            <Tab.Screen
                name="MyCourses"
                component={GisTopNavigator}
                options={{
                    tabBarLabel: "Maps",
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Courses"
                component={TopTabNavigator}
                options={{
                    tabBarLabel: "Crisis",
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: "Home",
                }}
            />

            {/* <Tab.Screen
                name="OfflineMap"
                component={OfflineMap}
                options={{
                    tabBarLabel: "نقشه آفلاین",
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default TabsNavigator;
