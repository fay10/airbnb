import React from 'React'; 
import { Button, Image, Text, View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            image: null,
            hasCameraRollPermission: null,
        };
    }

    pickImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted'});

        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true, 
                aspect: [4, 3],
            });

            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        }
    }

    render() {
        const { image } = this.state;
        return (
            <View style={ styles.container}>
            <Text>Profiel</Text>
        { image && <Image source={{ uri: image }} style={ styles.image } /> }
        <Button title='Afbeelding toevoegen' onPress={ this.pickImage } />
        </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200
    }
});