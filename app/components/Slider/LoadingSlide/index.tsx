import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';
import {LoadingSlideProps} from './types.ts';

export const LoadingSlideComponent = ({goToNextSlide}: LoadingSlideProps) => {
  return (
    <View>
      <Text>Loading Slide</Text>
      <Button title="Next" onPress={goToNextSlide} />
    </View>
  );
};

export const LoadingSlide = React.memo(LoadingSlideComponent);
