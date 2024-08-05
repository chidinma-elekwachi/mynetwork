import ClubSideBar from "../SideBar";
import CelebrationIcon from "@mui/icons-material/Celebration";

function ClubAbout() {
  return (
    <ClubSideBar>
      <div className="bg-lime-500 text-white h-12 p-2 flex gap-2 items-center">
        <CelebrationIcon />
        <div className="font-semibold ">About FOOTWORKING</div>
      </div>

      <div className="my-5 text-sm">
        The <span className="font-bold">FOOTWORKING</span> portal is a place created for football fans,
        footballers and people associated with football clubs in Poland. This
        applies in particular to amateur clubs, which base their activity on the
        selfless cooperation of people involved in the functioning of the club.
        <p className="my-5"> 
          <span className="font-bold">FOOTWORKING</span> offers all its registered users the possibility of
          creating and managing a football club website for free. The portal
          allows for the presentation of basic information about the club, such
          as: club history, players (staff), current schedule of games, league
          table, as well as a photo gallery, e.g. from matches. Automatically
          generated statistics of matches, players and many other additional
          functions of the system allow for an attractive presentation of our
          club's games.
        </p>
        The <span className="font-bold">FOOTWORKING</span> portal is also a great place to exchange opinions,
        discuss events related to clubs, thanks to the possibility of commenting
        on club news, and all other information entered by users. If your
        football club does not have a website yet - use Futbolowo.pl We also
        invite you to our football shop , where you can purchase football
        equipment from the best companies.
      </div>
    </ClubSideBar>
  );
}

export default ClubAbout;
