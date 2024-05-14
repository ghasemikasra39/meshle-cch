import {GestureResponderEvent} from 'react-native';

export type UseAddDevice = () => {
  goToNextSlide: (event: GestureResponderEvent) => void;
  swiperRef: React.MutableRefObject<null>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceName: string;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
};
