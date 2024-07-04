import FeedIdentity from "../../components/FeedIdentity/userProfileStats";
import PeopleList from "../../components/PeopleComponent.tsx/PeopleComponent";
import PostSection from "../../components/PostSection/PostSection";
import NetworkingNewsSection from "../../components/NetworkingNewsSection/NetworkingNewsSection";

function Home() {
  return (
    <div className="mx-20 my-5">
      <div className="md:flex gap-20">
        <div className="md:w-1/5 hidden md:block">
          <div>
            <FeedIdentity />
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <PostSection />
          <div className=" ">
            <PeopleList />
            <PeopleList />
          </div>
        </div>
        <div className="hidden md:block">
          <NetworkingNewsSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
