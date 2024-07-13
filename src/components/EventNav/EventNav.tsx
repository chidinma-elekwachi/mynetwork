import { Link } from 'react-router-dom';

const EventNav = () => {
  const eventButtons = [
    { title: "Home", path: "/" },
    { title: "Your Events", path: "/events" },
    { title: "Friends' Events", path: "/network" },
    { title: "Gallery", path: "/gallery" },
  ];

  return (
    <div className="flex flex-col p-4 bg-white gap-2 my-10 mx-5 rounded-lg border shadow-md">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <input
        type="text"
        placeholder="Search events"
        className="p-2 border rounded-full mb-4"
      />
      {eventButtons.map((eventButton, index) => (
        <Link key={index} to={eventButton.path}>
          <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-3 text-left w-full">
            {eventButton.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default EventNav;
