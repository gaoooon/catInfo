import React from "react";

interface Props {
  photoURL: string;
}

const PhotoFrame: React.FC<Props> = ({ photoURL }) => {
  return <img src={photoURL} alt="고양이 사진" width="500px" />;
};

PhotoFrame.defaultProps = {
  photoURL: "https://www.computerhope.com/jargon/e/error.png",
};

export default PhotoFrame;
