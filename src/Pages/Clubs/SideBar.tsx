import Login from "./Login";
import SideBarStats from "./SideBarStats";

interface Props {
  children?: React.ReactNode;
}

function ClubSideBar({ children }: Props) {
  return (
    <div className="flex justify-between gap-5 ">
      <Login />
      <div className="w-full">{children}</div>
      <SideBarStats />
    </div>
  );
}

export default ClubSideBar;
