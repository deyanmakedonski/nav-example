import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>First</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default FirstScreen;
