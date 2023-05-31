import React from "react";
import { Link } from "react-router-dom";

function SearchResults({ results }) {
  return (
    <div className="row row-cols-1  row-cols-md-2 row-cols-lg-4 g-4 mt-4">
      {results.map(({ etag, snippet, id }) => {
        const videoId = id.videoId;
        return (
          <div key={etag} className="col">
            <div className="card h-100 border-0">
              <Link to={`/videos/${videoId}`}>
                <img
                  src={snippet.thumbnails.high.url}
                  className="card-img-top"
                  alt={snippet.channelTitle}
                />
                <div className="card-body flex-column d-flex">
                  <h3 className="card-text">{snippet.title}</h3>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
