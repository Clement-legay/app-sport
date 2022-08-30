import * as React from "react";
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
    TextInput,
    ListViewComponent, RefreshControl
} from "react-native";
import SlideCardsComponent from "../../components/slideCardsComponent";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingMuscles: true,
            isLoadingBodyZones: true,
            isLoadingExercises: true,
            muscles: null,
            bodyZones: null,
            exercises: null,
            search: '',
            searchSectionWidth: '100%',
            navigation: this.props.navigation
        }
    }

    componentDidMount() {
        console.log(this.props.height)

        this.setState({
            isLoadingMuscles: true,
            isLoadingBodyZones: true,
            isLoadingExercises: true,
        })


        fetch('http://www.guacatube.fr/api/muscles/get')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingMuscles: false,
                    muscles: responseJson.muscles
                });
            })
            .catch((error) => {
                console.log(error);
            });

        fetch('http://www.guacatube.fr/api/body-zones/get')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingBodyZones: false,
                    bodyZones: responseJson.bodyZones
                });
            })
            .catch((error) => {
                console.log(error);
            });

        fetch('http://www.guacatube.fr/api/workouts/get')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoadingExercises: false,
                    exercises: responseJson.workouts
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        const items = [
            {name: 'By Muscles', state: this.state.isLoadingMuscles, items: this.state.muscles, detailScreen: 'AboutMuscleScreen'},
            {name: 'By Body Zones', state: this.state.isLoadingBodyZones, items: this.state.bodyZones, detailScreen: 'AboutBodyZoneScreen'},
            {name: 'Workouts', state: this.state.isLoadingExercises, items: this.state.exercises, detailScreen: 'AboutWorkoutScreen'},
        ];

        return (
            <View style={styles.container}>

                <View style={styles.searchSection}>
                    <View style={styles.iconWrapper}>
                        <Image source={require('../../../assets/images/search.png')} style={styles.searchIcon} />
                    </View>
                    <TextInput
                        style={{...styles.input, width: this.state.searchSectionWidth}}
                        placeholder="Search"
                        onChangeText={(search) => {this.setState({search})
                        console.log(this.state.search)
                        }}
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            // change the width of the search bar
                            this.setState({
                                searchSectionWidth: '80%'
                            })
                        }}
                    />
                </View>

                <FlatList
                    style={styles.list}
                    data={items}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoadingMuscles || this.state.isLoadingBodyZones || this.state.isLoadingExercises}
                            onRefresh={() => {
                                this.componentDidMount()
                            }}
                        />
                    }
                    renderItem={
                        ({item}) => {
                            return (
                                <SlideCardsComponent navigation={this.state.navigation} name={item.name} state={item.state} items={item.items} detailScreen={item.detailScreen}/>
                            )
                        }
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        height: '15%',
        backgroundColor: '#301844',
        borderRadius: 20,
        zIndex: 10
    },
    iconWrapper: {
        height: 20,
        width: 20,
        position: 'absolute',
        zIndex:10,
        left: 0,
        marginLeft: 20,
    },
    searchIcon: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        marginTop: 5,
    },
    input: {
        padding: 10,
        height: 40,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#424242',
        paddingLeft: 35,
    },
    list: {
        flex: 1,
    }
});