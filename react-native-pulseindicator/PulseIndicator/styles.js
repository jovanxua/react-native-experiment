import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contOuter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  contInner: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  contCenter: {
    width: 30,
    height: 30,
    borderRadius: 100,
    opacity: 0.5,
    zIndex: 3,
    position: 'absolute',
    left: 60,
    right: 0,
  },
});

export default styles;
