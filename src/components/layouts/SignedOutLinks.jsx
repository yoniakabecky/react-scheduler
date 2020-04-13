import React from "react";

import LinkedButton from "./LinkedButton";

const SignedOutLinks = () => {
  return (
    <>
      <LinkedButton route="/sign-in" label="Sign In" />
      <LinkedButton route="/sign-up" label="Sign Up" color="secondary" />
    </>
  );
};

export default SignedOutLinks;
