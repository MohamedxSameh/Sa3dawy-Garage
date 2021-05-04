import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

function mapComponent() {
  const zoom = 16;
  const center = { lat: 30.00772495048735, lng: 31.42699006180156 };
  return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}>
      <Marker position={{ lat: 30.00771, lng: 31.42699 }} />
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(mapComponent));
export default function Map() {
  return (
    <WrappedMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
// Marker
// apiKey: 'AIzaSyC5ckUyqB9sc9BWPIp5uwEB2pyAqAMefKA'
