interface Event {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  date: string;
}

const events: Event[] = [
  {
    id: 1,
    name: "Music Festival",
    description: "Join us for an amazing music festival featuring top artists.",
    imageUrl: "https://via.placeholder.com/300",
    date: "2024-07-20",
  },
  {
    id: 2,
    name: "MFootball League",
    description:
      "Amazing football festival featuring top programmers like chichi.",
    imageUrl: "https://via.placeholder.com/300",
    date: "2024-07-20",
  },
  {
    id: 3,
    name: "Art Exhibition",
    description: "Explore the latest art pieces from local artists.",
    imageUrl: "https://via.placeholder.com/300",
    date: "2024-08-15",
  },
];

const EventCard = () => {
  return (
    <div className="flex flex-wrap">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg overflow-hidden shadow-md w-full sm:w-1/2 lg:w-1/3 p-2 my-2">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-3">
            <h2 className="text-lg font-bold mb-2">{event.name}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-gray-500 text-sm mb-2">{event.date}</p>
            <button className="bg-customGreen text-white py-1 px-4 rounded">
              Interested
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
