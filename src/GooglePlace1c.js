import React, { useEffect } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

function GooglePlace1c() {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "",
  });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length) {
    }
    //   service.placesService?.getDetails(
    //     {
    //       placeId: placePredictions[0].place_id,
    //     },
    //     (placeDetails) => savePlaceDetailsToState(placeDetails)
    //   );
  }, [placePredictions]);

  return (
    <>
      <input
        className="form-control"
        placeholder="Debounce 500 ms"
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
        }}
        loading={isPlacePredictionsLoading}
      />
      {placePredictions.map((item) => {
        console.log(item);
        return <div>{item.description}</div>;
      })}
    </>
  );
}

export default GooglePlace1c;
