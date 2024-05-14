import {GestureResponderEvent} from 'react-native';

export type NameSlideProps = {
  onAddDevice: (event: GestureResponderEvent) => void;
  deviceName: string;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
};
