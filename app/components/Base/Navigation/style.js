import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  base: {
    width: 250,
    maxWidth: 250,
    minWidth: 250,
    height: '100%',
    backgroundColor: '#f8f8fb',
    paddingTop: 20,
  },
  categories: {
    display: 'flex',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoryHeader: {
    fontSize: '0.9em',
    letterSpacing: '0.05em',
    margin: 20,
  },
});

export default styles;
