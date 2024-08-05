import React, { useState } from "react";
import ClubHeader from "./Header";
import ClubHome from "./Pages/ClubHome";
import ClubAbout from "./Pages/ClubAbout";
import ClubNews from "./Pages/ClubNews";
import ClubTeamList from "./Pages/ClubTeamList";
import ClubStatistics from "./Pages/ClubStatistics";

function ClubNavbar() {
  const items = [
    {
      text: "",
      element: <ClubHome />,
    },
    {
      text: "About FOOTWORKING",
      element: <ClubAbout />,
    },
    {
      text: "News",
      element: <ClubNews />,
    },
    {
      text: "Team List",
      element: <ClubTeamList />,
    },
    {
      text: "Statistics",
      element: <ClubStatistics />,
    },
    {
      text: "",
      element: <div>skip</div>,
    },
  ];

  const [selectedElement, setSelectedElement] = useState<React.ReactNode>(
    items[0].element
  );
  return (
    <div className="w-full">
      <div className="max-w-[1000px] mx-auto">
        <div>
          <ClubHeader
            items={items}
            onItemSelect={(element) => setSelectedElement(element)}
          />
        </div>
        <div>{selectedElement}</div>
      </div>
    </div>
  );
}

export default ClubNavbar;
