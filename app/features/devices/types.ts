export interface Device {
  id: string;
  name: string;
  isOn: boolean;
  type: 'switch' | 'HSV';
  hsvValues?: [number, number, number];
}

export interface DevicesState {
  devices: Device[];
  addingDevice: boolean;
}
