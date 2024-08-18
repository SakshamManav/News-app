import React, { useState, useEffect } from "react";
import Newscomponent from "./Newscomponent";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    updateNews();
    document.title = `TaazaNews : ${props.category}`;
  }, []);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23677f5800a54e128d9a1372a46b8406&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    const newPage = page + 1;
    setPage(newPage);

    console.log("Fetching page:", newPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23677f5800a54e128d9a1372a46b8406&page=${newPage}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    // setLoading(loading);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <h1
          className="text-center "
          style={{
            marginTop: "70px",
          }}
        >
          TaazaNews : Top Headlines from ({props.category})
        </h1>

        {loading && <Spinner />}

        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4 my-2" key={element.url}>
              <Newscomponent
                title={element.title || "Not available"}
                description={
                  !element.description
                    ? "Oops! Description for this news is not available"
                    : element.description.slice(0, 100)
                }
                img_url={element.urlToImage || "./images.png"}
                newsUrl={element.url}
                author={element.author || "Unknown"}
                time={element.publishedAt}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
