import { useState } from "react";

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
      onClick={handleClick}
      className=" text-customGreen py-1 px-3 hover:bg-customGreen hover:text-white rounded-full hidden md:block">
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
