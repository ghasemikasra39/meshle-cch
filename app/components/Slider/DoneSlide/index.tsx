import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';
import {DoneSlideProps} from './types.ts';

export const DoneSlide = ({goToNextSlide}: DoneSlideProps) => {
  return (
    <View>
      <Text>Done Slide</Text>
      <Button title="Done" onPress={goToNextSlide} />
    </View>
  );
};
