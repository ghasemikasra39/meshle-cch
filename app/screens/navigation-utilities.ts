import React from 'react';
import {BackHandler, Platform} from 'react-native';
import {RootStackParamList} from './types';
import {
  NavigationState,
  createNavigationContainerRef,
} from '@react-navigation/native';

/**
 * Reference to the root App Navigator.
 *
 * If needed, you can use this to access the navigation object outside of a
 * `NavigationContainer` context. However, it's recommended to use the `useNavigation` hook whenever possible.
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * The types on this reference will only let you reference top level navigators. If you have
 * nested navigators, you'll need to use the `useNavigation` with the stack navigator's ParamList type.
 */
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  // ignore if iOS ... no back button!
  if (Platform.OS === 'ios') return;

  // The reason we're using a ref here is because we need to be able
  // to update the canExit function without re-setting up all the listeners
  const canExitRef = React.useRef(canExit);

  React.useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  React.useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        BackHandler.exitApp();
        return true;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
}

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: ReturnType<typeof navigationRef.getRootState>,
): keyof RootStackParamList {
  const route = state.routes[state.index];

  // Found the active route -- return the name
  if (!route.state) return route.name as keyof RootStackParamList;

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state as NavigationState<RootStackParamList>);
}
