import React, {useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  decrement,
  increment,
  selectCounter,
} from '../../features/test/testSlice';
import {Button, Text, View} from 'react-native';
import {packBuffer} from '../../helpers/buffer';
import {IncrementAsync, IncrementBuf} from '../../sagas/types';
import {IncrementStruct} from '../../structs/increment';
import {styles} from './styles.ts';
import {AddDeviceProps} from './types.ts';
import Swiper from 'react-native-swiper';
import {
  DeviceTypeSlide,
  DoneSlide,
  LoadingSlide,
  NameSlide,
} from '../../components/Slider';

export const AddDevice = (_: AddDeviceProps) => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    swiperRef?.current?.scrollBy(1);
  };
  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}>
      <View style={styles.slide}>
        <DeviceTypeSlide goToNextSlide={goToNextSlide} />
      </View>
      <View style={styles.slide}>
        <NameSlide goToNextSlide={goToNextSlide} />
      </View>
      <View style={styles.slide}>
        <LoadingSlide goToNextSlide={goToNextSlide} />
      </View>
      <View style={styles.slide}>
        <DoneSlide goToNextSlide={goToNextSlide} />
      </View>
    </Swiper>
  );

  return (
    <View style={styles.container}>
      <Text>Press the buttons below to change the value of counter</Text>
      <Text>{counter}</Text>
      <View style={styles.buttons}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Increment Async"
          onPress={() => dispatch<IncrementAsync>({type: 'INCREMENT_ASYNC'})}
        />
        <Button
          title="Increment Buffer"
          onPress={() =>
            dispatch<IncrementBuf>({
              type: 'INCREMENT_BUF',
              buffer: packBuffer(IncrementStruct, {
                value: 10,
                reserved1: '8',
                reserved0: '8',
              }).toString('base64'),
            })
          }
        />
      </View>
    </View>
  );
};
