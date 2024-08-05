import Search from "../../../components/Search/Search";
import ClubSideBar from "../SideBar";
import CelebrationIcon from "@mui/icons-material/Celebration";

function ClubStatistics() {
  const date = [
    {
      range: "Weekly",
    },
    {
      range: "Monthly",
    },
    {
      range: "General",
    },
    {
      range: "By number of fans",
    },
  ];
  return (
    <ClubSideBar>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center">
        <CelebrationIcon />
        <div className="font-semibold">Football Team Weekly Statistics</div>
      </div>
      <div className="flex justify-center items-center my-10">
        <div>
          <div className="flex gap-2">
            {date.map((d, i) => (
              <div className="border-black" key={i}>
                {d.range}
              </div>
            ))}
          </div>
          <div className="text-center">Data from 2024-08-05 03:44:55</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="bg-lime-500 text-white h-8 p-2 flex justify-center gap-2 items-center w-full">
          CLUB
        </div>
        <div className="bg-lime-500 text-white h-8 p-2 flex justify-center gap-2 items-center w-20">
          VISITS
        </div>
      </div>
      <div className="w-full my-5">
        <Search label={"Search"} placeholder={"Search"} />
      </div>
    </ClubSideBar>
  );
}

export default ClubStatistics;
