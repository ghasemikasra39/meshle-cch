import {Device} from '../features/devices/types.ts';

export type IncrementBuf = {type: 'INCREMENT_BUF'; buffer: string};
export type IncrementAsync = {type: 'INCREMENT_ASYNC'};
export type AddAsync = {type: 'ADE_DEVICE'; payload: Device};
export type ToggleDeviceAsync = {type: 'TOGGLE_DEVICE'; payload: string};
