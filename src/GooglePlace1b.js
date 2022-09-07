import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";

function GooglePlace1b() {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "",
    onPlaceSelected: (place) => {
      console.log(place);
    },
  });

  return <input ref={ref} className="form-control w-100 my-5" />;
}

export default GooglePlace1b;
