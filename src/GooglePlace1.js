import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

function GooglePlace1(props) {
  return (
    <div>
      <ReactGoogleAutocomplete
        apiKey=""
        onPlaceSelected={(place) => console.log(place)}
      />
    </div>
  );
}

export default GooglePlace1;
