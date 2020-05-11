import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Hola</Text>
      <Button
        title="First"
        onPress={() => {
          navigation.navigate('First');
        }}
      />
      <Button
        title="Tab"
        onPress={() => {
          navigation.navigate('Tab');
        }}
      />
    </View>
  );
};

export default Home;
