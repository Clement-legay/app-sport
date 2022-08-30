import * as React from "react";
import {View, Text, ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, RefreshControl} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class SlideCardsComponent extends React.Component {

    render() {

        return(
            <View style={{alignItems: "center", justifyContent: "center", marginTop: 10}}>
                <View style={{justifyContent: "space-between", flexDirection: "row", paddingRight: 20, paddingLeft: 20, alignItems: "center"}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "left", width: '100%'}}>{this.props.name}</Text>
                    <View style={{height:25, width: 25, borderRadius: 50, backgroundColor: "blueviolet", justifyContent: "center", alignItems: "center"}}>
                        <Ionicons name="add" size={20} color="white" />
                    </View>
                </View>
                {this.props.state ? (
                    <FlatList
                        data={[1,2]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        renderItem={({item}) => {
                            return (
                                <View style={styles.slide}>
                                    <View style={styles.img}></View>
                                    <View style={styles.box}>
                                        <Text style={styles.title}></Text>
                                        <Text style={styles.description}></Text>
                                    </View>
                                </View>
                                )}}/>
                ) : (
                    <FlatList
                        data={this.props.items}
                        keyExtractor={(_, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        renderItem={({item}) => {
                            return (
                                <View style={styles.slide} onTouchEnd={
                                    () => {
                                        // navigate to details screen
                                        this.props.navigation.navigate(this.props.detailScreen, {
                                            id: item.id
                                        });
                                    }
                                }>
                                    <Image
                                        source={{uri: item.thumbnail_path ?? 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}}
                                        style={styles.img}/>
                                    <View style={styles.box}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
            )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 150,
        width: 300,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: "capitalize",
    },
    description: {
        fontSize: 15,
        height: 30,
        lineHeight: 15,
        color: '#fff',
        overflow: 'hidden',
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    box: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 'auto',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
});