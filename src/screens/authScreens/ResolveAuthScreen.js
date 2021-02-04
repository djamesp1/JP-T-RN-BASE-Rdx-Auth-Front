import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tryLocalSignIn } from "../../actions/auth_actions";

const ResolveAuthScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tryLocalSignIn());
  }, []);

  return null;
};

export default ResolveAuthScreen;

// Purpose of this screen is to render first(invisibly), on startup
// This screen returns null, meaning nothing displays !!
