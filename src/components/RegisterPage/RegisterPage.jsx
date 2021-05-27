import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GenericAppBar from '../LandingPageBabbl/views/GenericAppBar';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <GenericAppBar />
      <RegisterForm />

      <center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
