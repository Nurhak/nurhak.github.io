import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import JWTAuth from '../../services/auth';
import './admin.css';

const Admin = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(({ auth }) => auth);
  const onSubmit = () => {
    dispatch(JWTAuth.onLogout());
  };
  return (
    <div className="container admin_container">
      <div className="row">
        <div className="col"> Hoşgeldin {authUser.name} </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
              Logout
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Admin;