import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Categories = ({ data }) => {
  return (<View>
    <Text style={ styles.subHeading }>Waar ben je naar op zoek?</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
      <FlatList
          style={ styles.categoryList }
          horizontal
          data={ data }
          renderItem={ ({ item, index }) => <View style={ EStyleSheet.child(styles, 'category', index, 3) }>
            <Image
              style={ styles.categoryImage }
              source={{ uri: item.image }}
            />
            <Text style={ styles.categoryText }>{ item.title }</Text>
          </View> }
        />
      </ScrollView>
  </View>)
}
 const styles = EStyleSheet.create({
  subHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 10,
  },
  categoryList: {
    flex: 1,
    width: '100%'
  },
  category: {
    width: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },

  'category:last-child': {
    marginRight: 10
  },

  categoryImage: {
    borderRadius: 5,
    width: 148,
    height: 98
  },
  
  categoryText: {
    padding: 5,
    shadowOpacity: 0
  }
});