import React, { useState } from 'react';
import Chichi from '../../assets/Elexis.jpg';

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
          <div className="bg-white rounded p-4 max-w-xl w-full relative">
            <button onClick={handleClose} className="absolute top-4 right-4 text-black text-2xl">&times;</button>
            <img src={selectedImage.url} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain mb-4" />
            <div className="text-center">
              <p className="text-lg font-bold">{selectedImage.alt}</p>
              <p className="text-gray-600">Additional details about the image can go here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
