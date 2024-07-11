import React, { useState } from "react";
import yt from "../assets/yt.png";
import glimp1 from "../assets/glimp1.png";
import glimp2 from "../assets/glimp2.png";
import Gallery from "./gallery";
import galleryData from "../data/galleryData";

const Glimps = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const openGallery = () => setGalleryOpen(true);
  const closeGallery = () => setGalleryOpen(false);

  return (
    <div className="md:w-4/5 mx-auto">
      <p className="p-4 gradiant-head text-xl font-bold tracking-wide">
        Glimpse 2023
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:gap-1 mt-6">
        <div className="hidden md:block row-span-2 bg-stone-100 "></div>

        <div className="col-span-3 md:col-span-2 bg-red-300">
          <img
            className="w-full h-full object-cover hover:cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.youtube.com/results?search_query=celebal+technologies"
              )
            }
            src={yt}
            alt=""
          />
        </div>

        <div className="bg-gray-400">
          <img className="w-full h-full object-cover" src={glimp1} alt="" />
        </div>

        <div className="bg-gray-500 relative">
          <img className="w-full h-full object-cover z-0" src={glimp2} alt="" />
          <p
            className="absolute top-1/3 left-1/3 text-white cursor-pointer z-10 text-5xl font-bold"
            onClick={openGallery}
          >
            +21
          </p>
        </div>
      </div>

      <Gallery isOpen={isGalleryOpen} closeGallery={closeGallery} images={galleryData} />
    </div>
  );
};

export default Glimps;
