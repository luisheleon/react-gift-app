export const getGif = async (category) => {
  const response = await fetch("https://api.giphy.com/v1/gifs/search?q=" + category + "&api_key=LGuwnSrWynYuTcwERkZbHr2NWiCYofNo&limit=10");
  const { data } = await response.json();
  const gifts = data.map((image) => {
    return {
      id: image.id,
      title: image.title,
      url: image.images?.downsized_medium.url,
    };
  });
  return gifts;
};
