import {GestureResponderEvent} from 'react-native';

export type DeviceTypeSlideProps = {
  goToNextSlide: (event: GestureResponderEvent) => void;
  buttons: string[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};
