import {GestureResponderEvent} from 'react-native';
import Swiper from 'react-native-swiper';

export type UseAddDevice = () => {
  goToNextSlide: (event: GestureResponderEvent) => void;
  onAddDevice: (event: GestureResponderEvent) => void;
  swiperRef: React.MutableRefObject<Swiper | null>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceName: string;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
};
