import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifts";

const useGetGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((data) =>
      setState({
        data: data,
        loading: false,
      })
    );
  }, [category, state]);

  return state;
};

export default useGetGifts;
