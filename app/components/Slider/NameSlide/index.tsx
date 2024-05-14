import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';
import {NameSlideProps} from './types.ts';

export const NameSlide = ({goToNextSlide}: NameSlideProps) => {
  return (
    <View>
      <Text>Device Name Slide</Text>
      <Button title="Next" onPress={goToNextSlide} />
    </View>
  );
};
