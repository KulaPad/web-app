import HomeLayout from "../components/HomeLayout";

export default function Account(props) {
  const { currentUser } = props;

  return <HomeLayout>{currentUser?.accountId}</HomeLayout>;
}
