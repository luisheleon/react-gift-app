export const getGif = async (category) => {
  if (category === "") return "Category its empty";
  try {
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
  } catch (err) {
    return "A problem has occurred whit gift category";
  }
};
