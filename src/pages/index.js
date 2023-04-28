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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery';
import Popper from 'popper.js';

import MSU from "../assets/images/MSU.png";

  /*import { graphql, Link } from "gatsby"*/



 /*import { graphql, useStaticQuery } from "gatsby"*/




 /*
 curl 'https://api.start.gg/gql/alpha'  
 
 https://curl.se/docs/httpscripting.html/*
 
 /*
 {
  "query": "...",
  "operationName": "...",
  "variables": { "myVariable": "someValue", ... }
}
 */

 /*
There appears to be some sort of module error causing this to not work 
https://stackoverflow.com/questions/59911706/module-not-found-error-cant-resolve-fs-in-node-modules-dotenv-lib

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

      <Container type="content" className="text-center home-start" >
        <h2><u>Location</u></h2>
        <ul class = "list-unstyled">
            <li class="text-success">Communication Arts and Science Building - Room 154</li>
            <li class="text-success">404 Wilson Rd, East Lansing, MI 48824</li>
            <li><img src={MSU} class='w-25 p-5'alt="MSU Smash Ultimate Club Emblem"></img></li>
        </ul>   
      </Container>
    </Layout>
  );
};
<span class="badge badge-secondary">New</span>
export default IndexPage;

/*
  export function Home ({data}) {
      console.log(data)
      const { bio } = data.site.siteMetadata
   
     return (
        <div>
        <p class="text-danger">{ bio }</p>
        </div>
     );
    };

     export const query = graphql`
     query MyQuery {
      startgg {
        currentUser {
          bio
          player {
            gamerTag
            id
            prefix
          }
        }
      }
    }
     `
*/
     
         /*
     Sources for my assignment...
     1) https://www.colbyfayock.com/posts/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet/
     2) https://youtu.be/7xkN-cbS4DU
     3) https://developer.start.gg/docs/intro/
     */
