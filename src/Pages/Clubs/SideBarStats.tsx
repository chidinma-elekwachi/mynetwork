import MenuIcon from "@mui/icons-material/Menu";

function SideBarStats() {
  return (
    <div className="max-w-[200px] w-full">
      <div className="bg-lime-500 text-white p-2 h-12 flex gap-2 items-center">
        <MenuIcon />
        <div className="font-semibold">STATISTICS</div>
      </div>
      <div className="items-center text-center">
        <div className="my-2">
          <div className="text-sm font-semibold text-neutral-700">
            TODAY JOIN:
          </div>
          <div className="text-xs text-lime-500">
            Users: <span className="font-bold">0</span>
          </div>
          <div className="text-xs text-lime-500">
            Clubs: <span className="font-bold">0</span>
          </div>
        </div>
        <div className="my-5">
          <div className="text-sm font-semibold text-neutral-700">TOTAL:</div>
          <div className="text-xs text-lime-500">
            Users: <span className="font-bold">0</span>
          </div>
          <div className="text-xs text-lime-500">
            Clubs: <span className="font-bold">0</span>
          </div>
          <div className="text-xs text-lime-500">
            Official pages: <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarStats;
