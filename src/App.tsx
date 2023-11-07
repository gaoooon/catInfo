import React, { useEffect, useState } from "react";
import { getCatInfo, getPhotoURL } from "./libs/api/apiConroller";
import PhotoFrame from "./components/PhotoFrame";

function App() {
  const [photoURL, setPhotoURL] = useState("");
  const [catInfo, setCatInfo] = useState("");

  const updateImg = async () => {
    const newURL = await getPhotoURL();
    setPhotoURL(newURL);
  };

  const updateCatInfo = async () => {
    const newInfo = await getCatInfo();
    setCatInfo(newInfo);
  };

  useEffect(() => {
    updateImg();
    updateCatInfo();
  }, []);

  return (
    <div>
      <h1>아무도 몰랐던 고양이의 신기한 사실</h1>
      <p>{catInfo}</p>
      <button onClick={updateCatInfo}>또 다른 사실 찾기</button>
      <br />
      <br />
      <h1>고양이 사진!!</h1>
      <button onClick={updateImg}>다른 고양이 사진 보기</button>
      <br />
      <br />
      <PhotoFrame photoURL={photoURL} />
    </div>
  );
}

export default App;
