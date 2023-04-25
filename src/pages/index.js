import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import L from "leaflet";
import { Marker, useMap } from "react-leaflet";

import { promiseToFlyTo, getCurrentLocation } from "lib/map";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import Snippet from "components/Snippet";

import gatsby_astronaut from "assets/images/gatsby-astronaut.jpg";

 /*
require('dotenv').config();
const fetch = (...args) => import ('node-fetch').then(({default: fetch}) => fetch(...args));
const startggURL = "https://api.start.gg/gql/alpha";
const startggKey = process.env.STARTGG_KEY;

const getEventID = (tournamentName, eventName) => {
  const eventSlug =`tournamant/${tournamentName}/event/${eventName}`;
  let eventId;
  fetch (startggURL, {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Accept' : 'application/json',
      Authorization: 'Bearer ' + startggKey
    },
    body: JSON.stringify({
      query: "query EventQuery($slug:String) {event(slug: $slug) {id name}}",
      variables: {
        slug:eventSlug
      },
    })
  }).then(r => r.json())
  .then(data => {
    console.log(data.data);
    eventId = data.data.event.id;
  })
  return eventId;
}

getEventID('spartan-circus-1','smash-ultimate-singles');

*/

const LOCATION = {
  lat: 42.723301,
  lng: -84.481667,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 16;
const ZOOM = 16;

const timeToZoom = 2000;
const timeToOpenPopupAfterZoom = 4000;
const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

const popupContentHello = `<p>Hello 👋</p>`;
const popupContentGatsby = `
  <div class="popup-gatsby">
    <div class="popup-gatsby-image">
      <img class="gatsby-astronaut" src=${gatsby_astronaut} />
    </div>
    <div class="popup-gatsby-content">
      <h1>Gatsby Leaflet Starter</h1>
      <p>Welcome to your new Gatsby site. Now go build something great!</p>
    </div>
  </div>
`;

/**
 * MapEffect
 * @description This is an example of creating an effect used to zoom in and set a popup on load
 */

const MapEffect = ({ markerRef }) => {
  const map = useMap();



  return null;
};

MapEffect.propTypes = {
  markerRef: PropTypes.object,
};

const IndexPage = () => {
  const markerRef = useRef();

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
  };

  return (
    <Layout pageName="home">
       <Map {...mapSettings}>
        <MapEffect markerRef={markerRef} />
        <Marker ref={markerRef} position={CENTER} />
      </Map>

      <Container type="content" className="text-center home-start">
        <h2>Location</h2>
        <p>Communication Arts and Science Building - Room 154</p>
        <p>404 Wilson Rd, East Lansing, MI 48824</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
