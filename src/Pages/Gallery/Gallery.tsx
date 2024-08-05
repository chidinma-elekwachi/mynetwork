import React, { useState } from 'react';
import Chichi from '../../assets/Elexis.jpg';
import GalleryInfo from '../../components/GalleryInfo/GalleryInfo';

type Image = {
  id: number;
  url: string;
  alt: string;
};

const images: Image[] = [
  { id: 1, url: 'https://th.bing.com/th/id/OIP.qxsBwtJjx4kzIfqO49cuhAAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.5', alt: 'Image 1' },
  { id: 2, url: 'https://via.placeholder.com/150', alt: 'Image 2' },
  { id: 3, url: 'https://via.placeholder.com/150', alt: 'Image 3' },
  { id: 4, url: 'https://via.placeholder.com/150', alt: 'Image 4' },
  { id: 5, url: 'https://via.placeholder.com/150', alt: 'Image 5' },
  { id: 6, url: 'https://via.placeholder.com/150', alt: 'Image 6' },
  { id: 7, url: Chichi, alt: 'Image 7' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [likedStates, setLikedStates] = useState<boolean[]>(new Array(images.length).fill(false));

  const handleClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      handleClose();
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    if (selectedImage) {
      const currentIndex = images.findIndex(image => image.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    if (selectedImage) {
      const currentIndex = images.findIndex(image => image.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  const handleLikeClick = (index: number) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  const handleContentClick = () => {
    if (window.innerWidth < 640) {
      handleClose();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="bg-white rounded shadow overflow-hidden cursor-pointer" onClick={() => handleClick(image)}>
              <img src={image.url} alt={image.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay" onClick={handleOutsideClick}>
          <div className="bg-white rounded p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col sm:flex-row relative" onClick={handleContentClick}>
            <button onClick={handleClose} className="absolute top-6 right-8 text-black text-2xl hidden sm:block">&times;</button>
            <div className="relative w-full sm:w-4/6 mb-4 sm:mb-0">
              <img src={selectedImage.url} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain" />
              <button onClick={handlePrev} className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-50 bg-opacity-50 rounded-full p-2 text-black text-2xl hover:bg-gray-100">&lt;</button>
              <button onClick={handleNext} className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-50 bg-opacity-50 rounded-full p-2 text-black text-2xl hover:bg-gray-100">&gt;</button>
            </div>
            <div className="w-full sm:w-2/6 flex flex-col sm:overflow-y-auto">
              <GalleryInfo
                index={images.findIndex(image => image.id === selectedImage.id)}
                liked={likedStates[images.findIndex(image => image.id === selectedImage.id)]}
                likeCount={likedStates[images.findIndex(image => image.id === selectedImage.id)] ? 1 : 0}
                onLikeClick={handleLikeClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
