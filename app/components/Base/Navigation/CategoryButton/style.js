import { StyleSheet } from 'aphrodite';

const styles = theme => StyleSheet.create({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3em',
    borderRadius: 40,
    height: 40,
    width: 40,
    cursor: 'pointer',
    color: theme.textLighter1,
    WebkitTransition: 'all ease 0.15s',
    ':hover': {
      backgroundColor: theme.grayDarker2,
      WebkitTransform: 'scale(1.05)',
    }
  },
  active: {
    backgroundColor: theme.grayDarker1,
    color: theme.text,
  },
});

export default styles;
