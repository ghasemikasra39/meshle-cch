import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';
import {DeviceTypeSlideProps} from './types.ts';

export const DeviceTypeSlide = ({goToNextSlide}: DeviceTypeSlideProps) => {
  return (
    <View>
      <Text>Device Type Slide</Text>
      <Button title="Next" onPress={goToNextSlide} />
    </View>
  );
};
