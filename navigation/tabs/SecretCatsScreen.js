import * as React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function SecretCatsScreen({navigation}) {
    const [img, setImg] = React.useState('');

    const getCat = () => {
        fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(data => {
                    setImg(data.file);
                    console.log(img);
                }
            )
    }



    return (
        <View style={styles.container}>
            <Image source={{uri: img ? img : getCat()}} style={styles.img}/>
            <Button
                onLoad={getCat}
                onPress={getCat}
                title="get a cat"
                color="#000"
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '80%',
        height: '60%',
        margin: 10
    }
});