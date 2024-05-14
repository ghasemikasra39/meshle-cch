import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Device, DevicesState} from './types.ts';

const initialState: DevicesState = {
  devices: [],
  addingDevice: false,
};

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    addDevice(state, action: PayloadAction<Device>) {
      state.devices.push(action.payload);
      state.addingDevice = false;
    },
    toggleDevice(state, action: PayloadAction<string>) {
      const device = state.devices.find(device => device.id === action.payload);
      if (device) {
        device.isOn = !device.isOn;
      }
    },
    addDeviceFailure(state) {
      state.addingDevice = false;
    },
    addDeviceStart(state) {
      state.addingDevice = true;
    },
  },
});

export const {addDevice, toggleDevice, addDeviceStart, addDeviceFailure} =
  deviceSlice.actions;

export default deviceSlice.reducer;
