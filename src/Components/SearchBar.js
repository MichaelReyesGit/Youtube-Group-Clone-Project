import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Modal from "./Modal";

function SearchBar() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(true);

  let URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search}&key=AIzaSyCdlC9flaUqKX9b2g9lbIzb4Us0PcEU7nQ&maxResults=25`;
  async function handleFetch() {
    try {
      let result = await axios.get(URL);

      if (search === "") {
        setModal(true);
      } else {
        setResults(result.data.items);
        setAlert(false);
      }
    } catch (e) {
      if (e.request.status >= 400) {
        setModal(true);
        console.log("bad request");
      }
      console.log(e);
    }
  }
  return (
    <div className="search-container container mt-5">
      <form
        className="input-group"
        onSubmit={(e) => {
          e.preventDefault();
          handleFetch(e);
          setSearch("");
        }}
      >
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="sarch"
          className="form-control rounded"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-addon"
          value={search}
        />
        <button type="submit" className="btn btn-danger px-5">
          Search
        </button>
      </form>

      {alert && (
        <div className="alert alert-dark mt-4" role="alert">
          No Search Results Yet! Please submit a search above!
        </div>
      )}
      <SearchResults results={results} />

      {modal && <Modal setModal={setModal} />}
    </div>
  );
}
export default SearchBar;