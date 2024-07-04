import media from "../../assets/media.png"
import event from "../../assets/event.png"
import artsy from "../../assets/article.svg"

function PostSection() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full">
      <div className="flex items-center mb-4">
        <img
          className="h-10 w-10 rounded-full mr-4"
          src="https://via.placeholder.com/40"
          alt="Chi chi Profile"
        />
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-3xl"
          placeholder="Start a post, try writing with AI"
        />
      </div>
      <div className="flex justify-around text-center">
        <button className="flex items-center p-1 rounded-md hover:bg-gray-100">
          <img src={media} alt="Media icon" width="35px" height="30px" className="p-1" />
          Media
        </button>
        <button className="flex items-center p-1 text-gray-600 rounded-md hover:bg-gray-100">
        <img src={event} alt="Media icon" width="35px" height="35px" className="p-1" />
          Event
        </button>
        <button className="flex items-center p-1 text-gray-600 rounded-md hover:bg-gray-100">
        <img src={artsy} alt="Media icon" width="30px" height="35px" className="p-1" />
          Write article
        </button>
      </div>
    </div>
  );
}

export default PostSection;
