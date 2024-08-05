import ClubSideBar from "../SideBar";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ClubNews() {
  const news = [
    {
      header: "And the Page of the Month has been chosen!",
      message: (
        <div>
          For the first time, the website of the month has been chosen. The
          distinguished website is the Unofficial website of the{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> club.
          The website{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> is one
          of the first created on our website and from the beginning it has been
          characterized by great care for both substantive and textual
          correctness, as well as high visual aesthetics - among others by
          creating our own individual website top.
        </div>
      ),
    },
    {
      header: "And the Page of the Month has been chosen!",
      message: (
        <div>
          For the first time, the website of the month has been chosen. The
          distinguished website is the Unofficial website of the{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> club.
          The website{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> is one
          of the first created on our website and from the beginning it has been
          characterized by great care for both substantive and textual
          correctness, as well as high visual aesthetics - among others by
          creating our own individual website top.
        </div>
      ),
    },
    {
      header: "And the Page of the Month has been chosen!",
      message: (
        <div>
          For the first time, the website of the month has been chosen. The
          distinguished website is the Unofficial website of the{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> club.
          The website{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> is one
          of the first created on our website and from the beginning it has been
          characterized by great care for both substantive and textual
          correctness, as well as high visual aesthetics - among others by
          creating our own individual website top.
        </div>
      ),
    },
    {
      header: "And the Page of the Month has been chosen!",
      message: (
        <div>
          For the first time, the website of the month has been chosen. The
          distinguished website is the Unofficial website of the{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> club.
          The website{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> is one
          of the first created on our website and from the beginning it has been
          characterized by great care for both substantive and textual
          correctness, as well as high visual aesthetics - among others by
          creating our own individual website top.
        </div>
      ),
    },
    {
      header: "And the Page of the Month has been chosen!",
      message: (
        <div>
          For the first time, the website of the month has been chosen. The
          distinguished website is the Unofficial website of the{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> club.
          The website{" "}
          <span className="text-lime-500 font-bold">dtolasventures</span> is one
          of the first created on our website and from the beginning it has been
          characterized by great care for both substantive and textual
          correctness, as well as high visual aesthetics - among others by
          creating our own individual website top.
        </div>
      ),
    },
  ];
  return (
    <ClubSideBar>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center">
        <CelebrationIcon />
        <div className="font-semibold ">News</div>
      </div>

      <div className="flex justify-center my-5">
        <Stack spacing={2}>
          <Pagination count={10} defaultPage={1} />
        </Stack>
      </div>

      {news.map((n, i) => (
        <div className="mb-10">
          <div
            className="bg-lime-500 text-white h-12 p-2 flex justify-between items-center"
            key={i}>
            <div className="flex gap-2">
              <CelebrationIcon />
              <div className="font-semibold ">{n.header}</div>
            </div>
            <div>
                05-08-2024
            </div>
          </div>
          <div className="mt-3">{n.message}</div>
        </div>
      ))}
    </ClubSideBar>
  );
}

export default ClubNews;
