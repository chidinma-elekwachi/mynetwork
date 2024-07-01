import PeopleList from "./PeopleComponent";


const defaultValues = [
  {
    imageUrl: "https://via.placeholder.com/40",
    name: "Chidinma Elekwachi",
    pronouns: "She/Her",
    role: "Software Engineer & Technical Writer",
    description: "I've crafted 100's of copies and scripts for brands",
    profileViewers: 14,
    postImpressions: 37,
    savedItems: "Saved items"
  }
];
const LinkedInFeedIdentity = ({ person }: { person: typeof defaultValues[0] }) => {
  return (
    <div className="p-4 m-6 bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="my-4">
        <div className="flex flex-col text-center">
          <div>
          <img 
            className="h-10 w-10 rounded-full my-4 relative left-16" 
            src={person.imageUrl} 
            alt={person.name} 
          />
            <h2 className="text-base font-semibold">{person.name}</h2>
            <p className="text-xs text-gray-500">{person.role} • {person.description}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <p className="mt-2 text-sm font-semibold text-gray-500">Profile viewers <span className="text-customGreen px-4">{person.profileViewers}</span></p>
        <p className="mt-2 text-gray-500 font-semibold text-sm">Post impressions <span className="text-customGreen px-2">{person.postImpressions}</span> </p>
      </div>
      <hr className=" "/>
      <p className="mt-4 text-gray-700">{person.savedItems}</p>
    </div>
  );
};
const person = defaultValues[0];

function Home() {
  return (
    <div className="md:flex">
      {/* First section- 1/3: feedIdentity */}
      <div className="md:w-1/5 hidden md:block">
        <LinkedInFeedIdentity person={person} />
      </div>

      <div className="w-full md:w-2/5">
          {/* This is the feed they share */}
        <div className=" ">
            <PeopleList />
        </div>
      </div>
      
    </div>
  )
}

export default Home
