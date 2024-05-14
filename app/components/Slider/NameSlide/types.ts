import {GestureResponderEvent} from 'react-native';

export type NameSlideProps = {
  goToNextSlide: (event: GestureResponderEvent) => void;
  deviceName: string;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
};
