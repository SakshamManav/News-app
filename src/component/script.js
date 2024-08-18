const url =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=23677f5800a54e128d9a1372a46b8406";

export async function News() {
  let response = await fetch(url);
  let data = await response.json();
  let articles = data.articles[1];
  // let imageUrl1 = data.articles[1].urlToImage;
  // let description1 = data.articles[1].description;
  // let newsUrl1 = data.articles[1].url;
  // let title2 = data.articles[2].title;
  // let imageUrl2 = data.articles[2].urlToImage;
  // let description2 = data.articles[2].description;
  // let newsUrl2 = data.articles[2].url;
  // console.log(data);
  // console.log(imageUrl1);
  return {
    // title1,
    // imageUrl1,
    // description1,
    // newsUrl1,
    // title2,
    // description2,
    // imageUrl2,
    // newsUrl2,
    articles,
  };
}
// News();
