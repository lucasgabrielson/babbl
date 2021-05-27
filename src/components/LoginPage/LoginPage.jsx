import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LogInAppBar from '../LandingPageBabbl/views/CommunityAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  LogInAppBar: {
    marginBottom: '300px',
  }
}));


function LoginPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <div className="logInAppBar">
      <LogInAppBar />
      </div>
      <LoginForm />

      <center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
