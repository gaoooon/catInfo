import axios from "axios";

export const getPhotoURL = async () => {
  const { data } = await axios.get(
    " https://api.thecatapi.com/v1/images/search"
  );
  return data[0].url;
};

export const getCatInfo = async () => {
  const {
    data: { fact },
  } = await axios.get("https://catfact.ninja/fact?max_length=100");
  return fact;
};
