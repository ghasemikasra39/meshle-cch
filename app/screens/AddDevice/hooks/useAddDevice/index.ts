import {UseAddDevice} from './types.ts';
import {useCallback, useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import {useDispatch} from 'react-redux';
import {AddAsync} from '../../../../sagas/types.ts';

export const useAddDevice: UseAddDevice = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef<Swiper>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [deviceName, setDeviceName] = useState('');

  const goToNextSlide = useCallback(() => {
    swiperRef?.current?.scrollBy(1);
  }, []);

  const onAddDevice = useCallback(() => {
    dispatch<AddAsync>({
      type: 'ADE_DEVICE',
      payload: {
        id: Date.now().toString(),
        name: deviceName,
        isOn: false,
        type: selectedIndex ? 'switch' : 'HSV',
        hsvValues: [0, 0, 0],
      },
    });
    goToNextSlide();
  }, [deviceName, dispatch, goToNextSlide, selectedIndex]);

  return {
    goToNextSlide,
    swiperRef,
    selectedIndex,
    setSelectedIndex,
    deviceName,
    setDeviceName,
    onAddDevice,
  };
};
