import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

function GooglePlaceTypehead() {
  const [options, setOptions] = useState([]);
  const [singleSelections, setSingleSelections] = useState([]);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "GOOGLE_API",
  });

  useEffect(() => {
    console.log(singleSelections);
  }, [singleSelections]);

  return (
    <div>
      <Typeahead
        id="basic-typeahead-single"
        onInputChange={(e) => {
          getPlacePredictions({ input: e });
        }}
        onChange={(e) => {
          setSingleSelections(e);
        }}
        options={placePredictions}
        labelKey="description"
        placeholder="Debounce 500 ms"
        loading={isPlacePredictionsLoading}
      />
    </div>
  );
}

export default GooglePlaceTypehead;
