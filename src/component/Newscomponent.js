import React from "react";

export default function Newscomponent(props) {
  return (
    <>
      <div className="card">
        <img
          src={props.img_url}
          className="card-img-top"
          alt=""
          style={{
            maxHeight: "10rem",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {/* <p className="card-text">{props.description}...</p> */}
          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "grey",
            }}
          >
            By {props.author} on {props.time}
          </p>
          <a
            href={props.newsUrl}
            target="blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
