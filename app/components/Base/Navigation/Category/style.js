import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: '1.3em',
    borderRadius: 40,
    height: 40,
    width: 40,
    ':hover': {
      backgroundColor: '#ddd',
    }
  },
});

export default styles;
