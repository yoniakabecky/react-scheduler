import React from "react";
import { SIGN_IN, SIGN_UP } from "../../constants/pathNames";

import LinkedButton from "./LinkedButton";

const SignedOutLinks = () => {
  return (
    <>
      <LinkedButton route={SIGN_IN} label="Sign In" />
      <LinkedButton route={SIGN_UP} label="Sign Up" color="secondary" />
    </>
  );
};

export default SignedOutLinks;
