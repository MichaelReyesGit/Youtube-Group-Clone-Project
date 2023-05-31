import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

function SingleVideoComponent() {
  const { id } = useParams();

  return (
    <div className="d-flex justify-content-center mt-5 ">
      <div className="">
        <YouTube videoId={id} />
      </div>
    </div>
  );
}

export default SingleVideoComponent;
