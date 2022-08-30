import * as React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button title="Go to Workouts" onPress={() => navigation.navigate('Workouts')} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});