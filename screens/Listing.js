import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class Listing extends React.Component {
    render() {
      const { navigation } = this.props;
      let listingId = navigation.getParam('listingId', 'NO-ID'); /* No-ID is een fallback */
       return (
        <View style={ styles.container }>
          <Text>ID: { listingId }</Text>
        </View>
      );
    }
  }
   const styles = EStyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'baseline',
      justifyContent: 'center',
    }
  });