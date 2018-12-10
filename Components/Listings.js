import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Listings = ({ data, navigation }) => {
    return (
      <View>
        <Text style={ styles.subHeading }>Woningen over de hele wereld</Text>
        <ScrollView>
          <FlatList
            numColumns={ 2 }
            style={ styles.listingList }
            data={ data }
            renderItem={ ({ item, index }) => <View style={ EStyleSheet.child(styles, 'listing', index, 8) }>
            <TouchableOpacity onPress= { () => {
                navigation.navigate('Listing', { // Geef aan naar welk scherm je wil navigeren
                    listingId: item.key
                });
            }}>
            <Image
            style={ styles.listingImage }
            source={{ uri: item.image }}
            />
            <Text style={ styles.listingText }>{ item.title }</Text>
            </TouchableOpacity>
            </View> }
          />
        </ScrollView>
      </View>
    )
  }

  const styles = EStyleSheet.create({
    subHeading: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      margin: 10,
    },
    listingList: {
      flex: 1,
      width: '100%'
    },
    listing: {
      flex: 1,
      marginLeft: 10,
      marginVertical: 10,
    },
    'listing:nth-child-odd': {
      marginRight: 10
    },
    listingImage: {
      borderRadius: 5,
      width: '100%',
      height: 120
    },
    listingText: {
      paddingVertical: 5
    }
  });