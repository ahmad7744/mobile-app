import * as React from 'react';
import { Appbar , Title } from 'react-native-paper';
import { Text , View } from 'react-native';
import Header from './Header';

const Search = () => {


  return (
 <View style={{flex:1}}>
    <Header/>
    <Text>
        Search Secreen
    </Text>
 </View>
  );
};

export default Search;