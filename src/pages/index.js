
import { Marker, useMap } from "react-leaflet";
import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MSU from "../assets/images/MSU.png";
import React, { useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'



const LOCATION = {
  lat: 42.722675906798486,
  lng: -84.4813998711634,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 16;

const MapEffect = ({ markerRef }) => {
  const map = useMap();
  return null;
};

const IndexPage = () => {
  const markerRef = useRef();
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
  };

  

  const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
  const data = useStaticQuery(graphql`
  query MyQuery {
    startgg {
      phase(id: "1297698") {
        phaseGroups {
          nodes {
            paginatedSeeds(query: {}) {
              nodes {
                placement
                players {
                  gamerTag
                }
              }
            }
          }
        }
      }
    }
  }
  
  `)

  return (
    <Layout pageName="home">
   <body>
        <Map {...mapSettings}>
          <MapEffect markerRef={markerRef} />
          <Marker ref={markerRef} position={CENTER} />
        </Map>

        <Container type="content" className="text-center">
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
                  <td class="bg-success text-white"><pre>{JSON.stringify(data, null, 1)}</pre></td>
                </tr>
            </tbody>
        </table>
        </Container>

        <Container type="content" className="text-center">
        <table class="table">
            <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <img src={MSU} class='w-25 p-5'alt="MSU Smash Ultimate Club Emblem"></img>
                    </div>
                  </th>
                </tr>
            </tbody>
        </table>
        </Container>
      </body>

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
  2) https://developer.start.gg/docs/intro/
*/