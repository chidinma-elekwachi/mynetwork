import likeIcon1 from '../../assets/like1.png';
import likeIcon2 from '../../assets/like2.png';
import commentIcon1 from '../../assets/comment1.png';
import shareIcon1 from '../../assets/share1.png';

type GalleryInfoProps = {
  index: number;
  liked: boolean;
  likeCount: number;
  onLikeClick: (index: number) => void;
};

const detailsArray = [
  { user: 'Chidinma Elekwachi', date: 'July 23rd, 2024', description: 'Details about Image 1' },
  { user: 'Diana Franklin', date: 'July 24th, 2024', description: 'Details about Image 2' },
  { user: 'Emeka Elekwachi', date: 'July 25th, 2024', description: 'Details about Image 3' },
  { user: 'Albert Ijitola', date: 'July 26th, 2024', description: 'Details about Image 4, I love 4 mehn' },
  { user: 'Collins Ijitola', date: 'July 27th, 2024', description: 'Details about Image 5' },
  { user: 'Richard Ijitola', date: 'July 28th, 2024', description: 'Details about Image 6' },
  { user: 'Pretty Little Thing', date: 'July 29th, 2024', description: 'A very fine girl, a throwback btw you should see her now!' },
];

const commentsArray = [
  { name: 'John Doe', text: 'Great photo! Really love it.' },
  { name: 'Jane Smith', text: 'Amazing shot! Where was this taken?' },
  { name: 'Alice Johnson', text: 'This looks wonderful. Thanks for sharing!' },
  { name: 'Alice Johnson', text: 'This looks wonderful. Thanks for sharing!' }

];

const GalleryInfo = ({ index, liked, likeCount, onLikeClick }: GalleryInfoProps) => {
  const { user, date, description } = detailsArray[index];

  const handleLikeClick = () => {
    onLikeClick(index);
  };

  return (
    <div className="w-full p-4 max-w-sm bg-white border border-gray-300">
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full w-10 h-10"></div> 
        <div className="ml-4">
          <p className="font-bold">{user}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{description}</p>
      <p className="text-gray-600 mb-4">Likes: {likeCount}</p> 
      <hr />
      <div className="flex justify-around text-gray-600 mb-4">
        <button onClick={handleLikeClick} className="flex items-center space-x-1">
          <img src={liked ? likeIcon2 : likeIcon1} alt="Like" className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-1">
          <img src={commentIcon1} alt="Comment" className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-1">
          <img src={shareIcon1} alt="Share" className="w-5 h-5" />
        </button>
      </div>
      <hr />
      <div className="mt-4">
        {commentsArray.map((comment, idx) => (
          <div key={idx} className="mb-3 p-3 bg-gray-100 rounded-lg">
            <p className="font-bold text-gray-700">{comment.name}</p>
            <p className="text-gray-600">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryInfo;
