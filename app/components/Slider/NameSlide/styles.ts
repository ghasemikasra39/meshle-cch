import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, margin: 15},
  header: {marginBottom: 10},
  inputContainer: {alignItems: 'center'},
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  inputStyle: {
    textAlign: 'center',
  },
  nextButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  nextButton: {borderRadius: 10, width: 150},
});
