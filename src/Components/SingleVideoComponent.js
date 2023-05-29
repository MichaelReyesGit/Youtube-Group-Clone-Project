import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

//Built in react function that creates the youtube video played

function SingleVideoComponent() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <YouTube videoId={id} />
      {/* Calling function with a parameter of the id from the selected video after search */}
    </div>
  );
}

export default SingleVideoComponent;
