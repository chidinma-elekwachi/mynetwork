import EventCard from '../../components/EventCard/EventCard';
import EventNav from '../../components/EventNav/EventNav';

const Events = () => {
  return (
    <div className='flex md:gap-2'>
      <div className='hidden md:block md:w-2/6'>
        <EventNav />
      </div>
      <div className='w-full md:w-4/6 my-10 mx-5 md:mr-20 bg-white p-4 rounded'>
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-4">Discover Events</h1>
          <div className="flex gap-4 mb-4">
            <select className="p-2 border rounded">
              <option value="">Search Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            <select className="p-2 border rounded">
              <option value="">Select Date</option>
              <option value="date1">Date 1</option>
              <option value="date2">Date 2</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col'>
            <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
