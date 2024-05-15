import {delay, put, takeEvery} from 'redux-saga/effects';
import {AddAsync} from './types.ts';
import {
  addDevice,
  addDeviceFailure,
  addDeviceStart,
} from '../features/devices/devicesSlice.ts';
import {PayloadAction} from '@reduxjs/toolkit';
import {Device} from '../features/devices/types.ts';

export function* handleAddDevice() {
  yield takeEvery<AddAsync>(
    'ADE_DEVICE',
    function* (action: PayloadAction<Device>) {
      try {
        yield put(addDeviceStart());
        yield delay(2000);
        yield put(addDevice(action.payload));
      } catch (err) {
        yield put(addDeviceFailure());
        console.error('Failed to add device:', err);
      }
    },
  );
}
