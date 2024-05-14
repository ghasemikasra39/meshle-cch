import {all, call, spawn} from 'redux-saga/effects';
import {incrementAsync, incrementBuf} from './sagas/increment';
import {handleAddDevice, handleToggleDevice} from './sagas/devices.ts';

export function* rootSaga() {
  const sagas = [
    incrementAsync,
    incrementBuf,
    handleAddDevice,
    handleToggleDevice,
  ];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
