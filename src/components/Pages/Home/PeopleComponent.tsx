type Person = {
  id: number;
  name: string;
  pronouns: string;
  role: string;
  description: string;
  timestamp: string;
  message: string;
  imageUrl: string;
};

type PersonDetailProps = {
  person: Person;
};

const defaultPerson: Person = {
  id: 0,
  name: 'Chidinma',
  pronouns: '(He/She)',
  role: 'Future Billionaire',
  description: 'Default description',
  timestamp: '1h',
  message: 'I am a Software engineer that enjoys learning and good foods too, I want a soft life too :)',
  imageUrl: 'https://via.placeholder.com/150',
};

const PersonDetail: React.FC<PersonDetailProps> = ({ person = defaultPerson }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full mr-4" src={person.imageUrl} alt={person.name} />
          <div>
            <h2 className="text-lg font-bold">{person.name}</h2>
            <p className="text-sm text-gray-500">{person.pronouns} • {person.role}</p>
          </div>
        </div>
        {/* <button className="bg-customGreen text-white py-1 px-3 rounded-full">+ Follow</button> */}
      </div>
      <p className="mt-2 text-gray-700">{person.description}</p>
      <div className="mt-2 text-sm text-gray-500">
        <span>{person.timestamp}</span> • <span>Edited</span>
      </div>
      <div className="mt-4 text-gray-700">
        {person.message}
      </div>
    </div>
  );
};

type PeopleListProps = {
  people?: Person[];
};

const PeopleList: React.FC<PeopleListProps> = ({ people = [defaultPerson] }) => {
  return (
    <div className="">
      {people.map(person => (
        <PersonDetail key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PeopleList;
