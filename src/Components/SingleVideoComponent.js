import React from 'react';
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";


    function SingleVideoComponent() {
        const { id } = useParams();
        return (
          <div>
            <h1>Ariana Grande</h1>
            <YouTube videoId={id}/>
          </div>
        );
      }

export default SingleVideoComponent;