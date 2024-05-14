import {configureStore} from '@reduxjs/toolkit';
import testReducer from './features/test/testSlice';
import devicesReducer from './features/devices/devicesSlice';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    test: testReducer,
    devices: devicesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
