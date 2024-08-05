import CelebrationIcon from "@mui/icons-material/Celebration";
import ClubSideBar from "../SideBar";

function ClubHome() {
  return (
    <ClubSideBar>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center">
        <CelebrationIcon />
        <div className="font-semibold ">CREATE A CLUB SITE - FOR FREE!</div>
      </div>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center my-10">
        <CelebrationIcon />
        <div className="font-semibold ">RECENTLY PUBLISHED</div>
      </div>
    </ClubSideBar>
  );
}

export default ClubHome;
