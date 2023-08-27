import React, { useState } from "react";
import {
    Alert,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swipable from "react-native-gesture-handler/Swipeable";
import Screen from "./../components/shared/Screen";
import ToplearnText from "./../components/shared/ToplearnText";
import ItemSeparator from "./../components/shared/ItemSeparator";

const confirmationAlert = (course, onPress) => {
    return Alert.alert(
        course.title,
        `Are you sure you want to clean ${course.title} from your list`,
        [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "Sure",
                onPress: onPress,
            },
        ],
        { cancelable: false }
    );
};

const deleteAction = (course, onPress) => {
    return (
        <TouchableOpacity onPress={() => confirmationAlert(course, onPress)}>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 50,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="#fff"
                />
            </View>
        </TouchableOpacity>
    );
};

const MyCoursesScreen = () => {
    const [getMyCourses, setMyCourse] = useState([
        { id: 1, title: "Hospital", master: "Rasoul Jalalifar" },
        { id: 2, title: "Police Station", master: "Rasoul Jalalifar" },
        { id: 3, title: "Fire Fighting Station", master: "Rasoul Jalalifar" },
        { id: 4, title: "Essectial Places", master: "Rasoul Jalalifar" },
        { id: 5, title: "Hidrant", master: "Rasoul Jalalifar" },
    ]);

    const handleDelete = (course) => {
        setMyCourse(getMyCourses.filter((c) => c.id !== course.id));
    };

    return (
        <Screen style={{ alignItems: "center" }}>
            <View style={styles.title}>
                <ToplearnText fontFamily="yekan" size="3" color="#fff">
                Rasoul Jalalifar
                </ToplearnText>
            </View>
            <ItemSeparator height={5} />
            <View style={{ width: "100%" }}>
                <FlatList
                    data={getMyCourses}
                    keyExtractor={(c) => c.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 7 }}>
                            <ItemSeparator height={3} />
                            <Swipable
                                renderRightActions={() =>
                                    deleteAction(item, () => handleDelete(item))
                                }
                            >
                                <View style={styles.container}>
                                    <View style={styles.details}>
                                        <ToplearnText
                                            fontFamily="yekan"
                                            size="2.5"
                                        >
                                            {item.title}
                                        </ToplearnText>
                                        <ToplearnText
                                            fontFamily="yekan"
                                            size="1.5"
                                        >
                                            {`Submited By : ${item.master} `}
                                        </ToplearnText>
                                    </View>
                                </View>
                            </Swipable>
                            <ItemSeparator height={3} />
                        </View>
                    )}
                />
            </View>
        </Screen>
    );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
    },
    details: {
        marginLeft: 10,
        backgroundColor: "#f8f4f4",
        width: "100%",
        padding: 10,
        borderRadius: 14,
        alignItems: "center",
    },
});
