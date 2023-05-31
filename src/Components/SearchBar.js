import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function SearchBar() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(true);

  let API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search}&key=AIzaSyCdlC9flaUqKX9b2g9lbIzb4Us0PcEU7nQ&maxResults=25/eqwrfg`;
  async function handleFetch() {
    try {
      let result = await axios.get(API);
      setResults(result.data.items);
    } catch (e) {
      if (e.request.status === 400) {
        setModal(true);
        console.log("bad request");
      }
      console.log(e);
    }
  }
  return (
    <div className="search-container ">
      <div className="input-group">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch();
            setAlert(false);
            setSearch("");
          }}
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="form-control rounded"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
          />
          <button type="submit" className="btn btn-outline-primary">
            search
          </button>
        </form>
        {alert && (
      
      <div className="alert alert-light" role="alert">
        No Search Results Yet!, Please submit a search above!
      </div>
      )}
      {results.map(({ etag, snippet, id }) => {
        const videoId = id.videoId;
        return (
          <div key={etag} className="card" style={{ width: "18rem" }}>
            <Link to={`/videos/${videoId}`}>
              <img
                src={snippet.thumbnails.high.url}
                className="card-img-top"
                alt={snippet.channelTitle}
              />
              <div className="card-body">
                <h2 className="card-text">{snippet.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
      {modal && (
        <div>
          <div
            className="modal fade show"
            id="exampleModal"
            // data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLiveLabel"
            // aria-hidden="true"
            aria-modal="true"
            role="dialog"
            style={{ display: "block" }} // Set the display style to 'block'
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Search Error
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>There was an error. Please refine your search.</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
    </div>
  );
}
export default SearchBar;