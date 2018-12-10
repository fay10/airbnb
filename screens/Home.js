import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { AppLoading } from 'expo';
import { Categories } from '../Components/Categories';
import { Listings } from '../Components/Listings';
import { Listing } from './Listing';

class HomeScreen extends React.Component {

    componentDidMount() {
        
        this.getData('categories')
        this.getData('listings')
      }
       getData = (ref) => {
        firebase.database().ref(ref).once('value', (snapshot) => {
          this.setState({ [ref]: snapshot.val() })
        });
      }
      
        
      render() {
        const { categories, listings } = (this.state) ? this.state : {};

        if (!categories || !listings) {
            return <AppLoading/>
        }


        return (
            <View style={styles.container}>
             <ScrollView showsVerticalScrollIndicator={ false }>
          <Categories data={categories} />
          <Listings data={listings} navigation={ this.props.navigation }/>
        </ScrollView>
      </View>
        );
    }
}

export default Home = createStackNavigator({
    App: {
        screen: HomeScreen, 
        navigationOptions: { title: 'Home Fay Schouten' }
    }, 
    Listing
})

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
});