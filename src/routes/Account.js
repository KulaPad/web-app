import HomeLayout from "../components/HomeLayout";

export default function Account(props) {
  const { currentUser } = props;

  return <>{currentUser?.accountId}</>;
}
