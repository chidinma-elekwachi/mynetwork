import Search from "../Search/Search";
import HomeIcon from "../../assets/HomeIcon";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import NetworkIcon from "../../assets/NetworkIcon";
import JobsIcon from "../../assets/JobsIcon";

function Header() {
  const location = useLocation();
  return (
    <div className="bg-white py-2 px-40">
      <div className="flex gap-20">
        <div className="flex items-center gap-2">
          <div>Logo</div>
          <div>
            <Search label={"Search"} placeholder={"Search"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Link to={"/"} className="text-center items-center">
              <div className="mx-3">
                <HomeIcon
                  color={location.pathname == "/" ? "#000000" : "#666666"}
                />
              </div>
              <div>Home</div>
            </Link>
          </div>
          <div>
            <Link to={"/network"} className="text-center items-center">
              <div className="mx-3">
                <NetworkIcon
                  color={
                    location.pathname == "/network" ? "#000000" : "#666666"
                  }
                />
              </div>
              <div>Network</div>
            </Link>
          </div>
          <div>
            <Link to={"/jobs"}>
              <div>
                <div className="">
                  <JobsIcon
                    color={location.pathname == "/jobs" ? "#000000" : "#666666"}
                  />
                </div>
                <div>Jobs</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <div></div>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <div></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
