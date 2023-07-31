import React, { useContext } from 'react'
import { Context } from '../main';
import Loading from '../components/Loading';
import { Navigate } from 'react-router-dom';

const Profile = () => {

  const { isAuthenticated,  loader, user} = useContext(Context);

  if(!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    loader? <Loading /> : (
    <div>
    <h1>{user?.name}</h1>
    <h1>{user?.email}</h1>
    </div>
    )
  );
};

export default Profile;