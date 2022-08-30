import * as React from "react";
import {Text, View, StyleSheet, FlatList, Image, ScrollView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            workout: null,
            params: this.props.route.params
        }
        this.props.navigation.setOptions({
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
        fetch(`http://www.guacatube.fr/api/workouts/${this.state.params.id}/get`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    workout: [responseJson.exercice]
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image
                        source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}}
                        style={styles.img}
                    />
                </View>
                <BottomSheet>

                </BottomSheet>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    header: {
        position: 'absolute',
        top: -90,
        left: 0,
        height: 360,
        width: '100%',
        zIndex: -1,
    },
    scrollableCard: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    containerScroll: {
        width: '100%',
        height: '100%',
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    spacer: {
        height: 260,
    }
});