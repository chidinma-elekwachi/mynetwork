import { Stack, Pagination } from "@mui/material";
import Search from "../../../components/Search/Search";
import ClubSideBar from "../SideBar";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Select } from "@headlessui/react";

function ClubTeamList() {
  return (
    <ClubSideBar>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center">
        <CelebrationIcon />
        <div className="font-semibold">Football Teams - Club List</div>
      </div>
      <div className="my-10">
        <div className="w-full">
          <Search label={"Search"} placeholder={"Search"} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="font-bold text-sm">Side:</div>
          <div className="w-">
            <Stack spacing={2}>
              <Pagination count={5} defaultPage={1} />
            </Stack>
          </div>
        </div>
        <div>
          <Select name="status" aria-label="Project status" className="border data-[hover]:shadow data-[focus]:bg-blue-100 ">
            <option value="active">by date added</option>
            <option value="paused">alphabetically</option>
            <option value="delayed">by number of people</option>
          </Select>
        </div>
      </div>
    </ClubSideBar>
  );
}

export default ClubTeamList;
