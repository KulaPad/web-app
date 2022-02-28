import HomeLayout from "../components/HomeLayout";

export default function Staking(props) {
  const { currentUser } = props;

  return <HomeLayout>Staking - {currentUser?.accountId}</HomeLayout>;
}
