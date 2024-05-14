import React from 'react';
import {View} from 'react-native';
import {styles} from './styles.ts';
import {AddDeviceProps} from './types.ts';
import Swiper from 'react-native-swiper';
import {
  DeviceTypeSlide,
  LoadingSlide,
  NameSlide,
} from '../../components/Slider';
import {useAddDevice} from './hooks/useAddDevice';

const BUTTON_GROUP = ['HSV Device', 'Switch Device'];

export const AddDevice = (_: AddDeviceProps) => {
  const {
    goToNextSlide,
    swiperRef,
    selectedIndex,
    setSelectedIndex,
    deviceName,
    setDeviceName,
    onAddDevice,
  } = useAddDevice();

  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}>
      <View style={styles.slide}>
        <DeviceTypeSlide
          buttons={BUTTON_GROUP}
          goToNextSlide={goToNextSlide}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </View>
      <View style={styles.slide}>
        <NameSlide
          onAddDevice={onAddDevice}
          deviceName={deviceName}
          setDeviceName={setDeviceName}
        />
      </View>
      <View style={styles.slide}>
        <LoadingSlide goToNextSlide={goToNextSlide} />
      </View>
    </Swiper>
  );
};
