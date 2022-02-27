import { Flex, SlideFade } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SignInBtn from "../components/SignInBtn";
import SlideUpWhenVisible from "../hooks/SlideUpWhenVisible";

export default function Landing(props) {
  const { contract, walletConnection, nearConfig, currentUser } = props;

  const signIn = () => {
    walletConnection.requestSignIn(nearConfig.contractName, "NEAR ToDo List");
  };

  const signOut = () => {
    walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
      >
        <Hero
          title="Landing Page"
          subtitle="Used Create-React-App Chakra Template"
          image="https://source.unsplash.com/collection/404339/800x600"
          ctaText={
            !!currentUser?.accountId
              ? `${currentUser.accountId} (sign out)`
              : "Sign In with Near"
          }
          ctaOnClick={!!currentUser?.accountId ? signOut : signIn}
        />
      </SlideFade>
      <Footer />
    </Flex>
  );
}
