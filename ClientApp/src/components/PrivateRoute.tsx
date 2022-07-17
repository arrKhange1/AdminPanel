import { Redirect, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { CircularProgress } from "@mui/material";

const PrivateRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = useAppSelector(state => state.authReduser.isAuthenticated) // получаем текущее состояние 
  const requestProcess = useAppSelector(state => state.authReduser.requestSended)
  //
  const name = useAppSelector(state => state.authReduser);
  console.log(name);
  //


  return (
    <Route
      {...rest} //какое то наследование  
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : 
        requestProcess ? (<CircularProgress/>) : // меняется глобальный стейт почему то
        (
          <Redirect push to='/signin' />
        )
      }
    />
  );
};

export default PrivateRoute