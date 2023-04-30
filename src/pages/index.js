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

import React, { useRef, useEffect } from "react";

import { Link, useStaticQuery, graphql } from 'gatsby'


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



  const data = useStaticQuery(graphql`
  query MyQuery {
    startgg {
      currentUser {
        bio
      }
    }
  }
  `)



  return (
    <Layout pageName="home">
  
       <Map {...mapSettings}>
        <MapEffect markerRef={markerRef} />
        <Marker ref={markerRef} position={CENTER} />
      </Map>

      <Container>
      <table class="table">
          <tbody>
              <tr>
                <th scope="row"></th>
                <td>Communication Arts and Science Building - Room 154</td>
                <td>404 Wilson Rd, East Lansing, MI 48824</td>
              </tr>
           </tbody>
      </table>
      </Container>



      <Container type="content" className="text-center">
      <h2 class="text-center text-success"><u>Recent Results:</u></h2>
      <h3>Spartan Circus</h3>
      <table class="table">
          <tbody>
              <tr>
                <th scope="row"></th>
                <td>{data.startgg.currentUser.bio}</td>
              </tr>
           </tbody>
      </table>
      </Container>

      <Container type="content" className="text-center">
      <table class="table">
          <tbody>
              <tr>
                <th scope="row">
                 <img src={MSU} class='w-25 p-5'alt="MSU Smash Ultimate Club Emblem"></img>
                </th>
              </tr>
           </tbody>
      </table>
      </Container>
      
    </Layout>
  );
};

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
