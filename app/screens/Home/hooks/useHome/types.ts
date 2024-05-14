import {GestureResponderEvent} from 'react-native';

export type UseHome = () => {
  onAddDeviceHandler: (event: GestureResponderEvent) => void;
};
