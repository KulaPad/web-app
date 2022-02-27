import { Button } from "@chakra-ui/react";
import getConfig from "../configs/config.js";

const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

const SignInBtn = (props) => {
  const handleClickSignIn = () => {
    window.walletConnection.requestSignIn(
      nearConfig.ftTokenContractName,
      "KULA Lauchpad"
    );
  };

  const handleClickSignOut = () => {
    window.walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  if (window.accountId)
    return (
      <Button onClick={handleClickSignOut} {...props}>
        {window.accountId} (sign out)
      </Button>
    );

  return (
    <Button onClick={handleClickSignIn} {...props}>
      Sign In with Near
    </Button>
  );
};

export default SignInBtn;
