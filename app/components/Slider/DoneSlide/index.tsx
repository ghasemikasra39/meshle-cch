import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import React from 'react';
import {DoneSlideProps} from './types.ts';

export const DoneSlideComponent = ({goToNextSlide}: DoneSlideProps) => {
  return (
    <View>
      <Text>Done Slide</Text>
      <Button title="Done" onPress={goToNextSlide} />
    </View>
  );
};

export const DoneSlide = React.memo(DoneSlideComponent);
