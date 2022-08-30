import * as React from "react";
import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            muscle: null,
            params: this.props.route.params
        }
        this.props.navigation.setOptions({
            headerBackground: () => (
                <Image
                    source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}}
                    style={styles.img}
                />
            ),
            headerStyle: {
                height: '65%',
            },
            headerTitle: () => null,
            headerRight: () => (
                <Ionicons name="share-social-outline" size={25} color="white" style={{position: "absolute", top: 0, padding: 20}}
                          onPress={() => alert("share")}
                />
            ),
            headerLeft: () => (
                <Ionicons name="arrow-back" size={25} color="white" style={{position: "absolute", top: 0, padding: 20}}
                          onPress={() => this.props.navigation.goBack()}
                />
            ),
        })
    }

    componentDidMount() {
        fetch(`http://www.guacatube.fr/api/muscles/${this.state.params.id}/get`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    muscle: [responseJson.muscle]
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        // console log params from navigation

        return (
            <View style={styles.container}>

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
    img: {
        width: '100%',
        height: '100%',
    },
});