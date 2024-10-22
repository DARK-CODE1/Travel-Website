import React from 'react';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg2 from "../../assets/images/gallery/g2.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg5 from "../../assets/images/gallery/g5.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const Gallery = () => {

  var images = [
    {
      src: GalleryImg1,
      desc: "Person wearing shoes",
      sub: "Gift Habeshaw"
    },
    {
      src: GalleryImg3,
      desc: "Blonde woman wearing sunglasses smiling at the camera ",
      sub: "Dmitriy Frantsev"
    },
    {
      src: GalleryImg6,
      sub: "Harry Cunningham"
    },
    {
      src: GalleryImg4,
      desc: "Jaipur , Rajasthan India",
      sub: "Liam Baldock"
    },
    {
      src: GalleryImg7,
      sub: "Verne Ho"
    },
    {
      src: GalleryImg6,
      desc: "Rann of kutch , India",
      sub: "Hari Nandakumar"
    },
  ];
  return (
    <div>Gallery</div>
  )
}

export default Gallery