import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  divider: {
    background: "blue",
  },

  expenseIncomeGraphContainer: {
    display: "flex",
    flexDirection: "row",
    '& > *': {
      margin: theme.spacing(2),
    },
  },



}));
