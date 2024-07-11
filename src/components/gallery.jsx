import React from "react";
import { MdClose } from "react-icons/md";
const Gallery = ({ isOpen, closeGallery, images }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeGallery();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={handleBackgroundClick}>
      <div className="relative p-5 w-5/6 md:w-3/4 lg:w-1/2 xl:w-2/5 h-4/5 bg-white rounded-lg overflow-y-auto">
        <div className="absolute top-2 right-2 cursor-pointer text-3xl text-gray-700 hover:text-gray-900" onClick={closeGallery}>
        <MdClose />
        </div>
        <div className="h-full flex flex-wrap justify-center items-center p-4">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-1/3 h-auto p-2 cursor-pointer"
              onClick={() => window.open(image.src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
