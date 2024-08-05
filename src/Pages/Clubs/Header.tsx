import React from "react";
import Search from "../../components/Search/Search";

interface Item {
  text: string;
  element: React.ReactNode;
}

interface Props {
  items: Item[];
  onItemSelect: (element: React.ReactNode) => void;
}

function ClubHeader({ items, onItemSelect }: Props) {
  return (
    <div className="py-2 md:mx-auto">
      <div className="md:flex justify-between items-center">
          <div className="font-bold text-3xl cursor-pointer" onClick={() => onItemSelect(items[0].element)}>
            <span className="text-lime-500">FOOT</span>WORKING
          </div>
        <div>
          <div className="w-full flex-shrink-0">
            <Search label={"Search"} placeholder={"Search"} />
          </div>
        </div>
      </div>
      <div className="mt-2 mb-5">
        <div className="border-y border-lime-500">
          <div className="bg-[#a8a9ad] h-8 items-center flex text-center justify-between px-10">
            {items.map(
              (item, index) =>
                item.text && (
                  <div
                    key={index}
                    className="border-x border-[#d3d3d5] text-center hover:text-white hover:bg-lime-500 items-center cursor-pointer"
                    onClick={() => onItemSelect(item.element)}>
                    <div className="mx-10">{item.text}</div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubHeader;
