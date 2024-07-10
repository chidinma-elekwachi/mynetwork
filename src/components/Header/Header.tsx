import Search from "../Search/Search";
import HomeIcon from "../../assets/HomeIcon";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import NetworkIcon from "../../assets/NetworkIcon";
import JobsIcon from "../../assets/JobsIcon";
import HomeIcon2 from "../../assets/HomeIcon2";
import JobsIcon2 from "../../assets/JobsIcon2";
import NetworkIcon2 from "../../assets/NetworkIcon2";
import MessageIcon from "../../assets/MessageIcon";
import MessageIcon2 from "../../assets/MessageIcon2";
import GroupIcon2 from "../../assets/groups2.png";
import GroupIcon1 from "../../assets/groups1.png";


function Header() {
  const location = useLocation();
  
  const items = [
    {
      path: "/",
      tab: "Home",
      icon1: <HomeIcon />,
      icon2: <HomeIcon2 />,
    },
    {
      path: "/network",
      tab: "Friends",
      icon1: <NetworkIcon />,
      icon2: <NetworkIcon2 />,
    },
    {
      path: "/jobs",
      tab: "Jobs",
      icon1: <JobsIcon />,
      icon2: <JobsIcon2 />,
    },
    {
      path: "/groups",
      tab: "Groups",
      icon1: <img src={GroupIcon1} alt="" width={24} height={24}/>,
      icon2: <img src={GroupIcon2} alt="" width={24} height={24}/>,
    },
    {
      path: "/gallery",
      tab: "Gallery",
      icon1: <MessageIcon />,
      icon2: <MessageIcon2 />,
    },
    {
      path: "/events",
      tab: "Events",
      icon1: <NetworkIcon />,
      icon2: <NetworkIcon2 />,
    },
    // {
    //   path: "/messaging",
    //   tab: "Messaging",
    //   icon1: <MessageIcon />,
    //   icon2: <MessageIcon2 />,
    // },
  ];
  return (
    <div className="bg-white py-2 px-10 md:px-40">
      <div className="md:flex md:gap-40">
        <div className="flex items-center gap-2">
          <div className="hidden md:block">Logo</div>
          <div className="w-full flex-shrink-0 hidden md:block">
            <Search label={"Search"} placeholder={"Search"} />
          </div>
        </div>
        <div className="flex items-center gap-8">
          {items.map((t, i) => (
            <div className="items-center text-center w-20" key={i}>
              <Link to={t.path} className="text-center items-center">
                {t.path == location.pathname ? (
                  <div className="">{t.icon2}</div>
                ) : (
                  <div>{t.icon1}</div>
                )}
                <div className={`text-xs ${t.path == location.pathname ? "text-black" : "text-[#666]"}`}>{t.tab}</div>
              </Link>
              {location.pathname == t.path ? (
                <hr className="border border-black mt-2 -mb-2" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
