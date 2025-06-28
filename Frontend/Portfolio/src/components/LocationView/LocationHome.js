import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Spinner, Alert, Table, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useGeolocated } from "react-geolocated";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { MdLocationOn } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";
import ParticleBackground from "../ParticleBackground";
import "./Location.css";

function LocationHome() {
  const [sessionId, setSessionId] = useState(uuidv4());
  const [allLocationData, setAllLocationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [state, setState] = useState("N/A");
  const [country, setCountry] = useState("N/A");

  const { coords } = useGeolocated({
    positionOptions: { enableHighAccuracy: true },
    userDecisionTimeout: 5000,
  });
  useEffect(() => {
    const generatedSessionId = uuidv4();
    setSessionId(generatedSessionId);
  }, []);

  // Fetch all location data
  const getLocationData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://2o0zalvx4i.execute-api.us-east-1.amazonaws.com/location"
      );
      if (!response.ok)
        throw new Error(
          `Failed to fetch location data: ${response.statusText}`
        );
      const data = await response.json();
      const sortedData = [...data].sort((a, b) => {
        const timestampA = parseInt(a.timestamp, 10);
        const timestampB = parseInt(b.timestamp, 10);
        return timestampB - timestampA; // Descending order
      });
      setAllLocationData(sortedData);
    } catch (error) {
      setErrorMessage("Error fetching all location data.");
      console.error("Error fetching location data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Send current location data
  const sendLocationData = useCallback(async () => {
    if (!coords) {
      setErrorMessage("Location data not available.");
      return;
    }

    const payload = {
      session_id: sessionId,
      latitude: coords.latitude,
      longitude: coords.longitude,
      message: userMessage,
    };

    try {
      const response = await fetch(
        "https://2o0zalvx4i.execute-api.us-east-1.amazonaws.com/location",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Location data sent successfully.");
        getLocationData();
      } else {
        throw new Error("Failed to send location data.");
      }
    } catch (error) {
      setErrorMessage("Error sending location data.");
      console.error("Error sending location data:", error);
    }
  }, [coords, sessionId, userMessage, getLocationData]);

  // Update local state based on location data
  const updateLocalLocation = useCallback(() => {
    if (coords && allLocationData.length > 0) {
      const locationMatch = allLocationData.find(
        (loc) =>
          loc.latitude === coords.latitude.toString() &&
          loc.longitude === coords.longitude.toString()
      );

      if (locationMatch) {
        setUserMessage(locationMatch.message || "No message");
        setState(locationMatch.state || "N/A");
        setCountry(locationMatch.country || "N/A");
      } else {
        setState("N/A");
        setCountry("N/A");
      }
    }
  }, [coords, allLocationData]);

  // Fetch location data on mount
  useEffect(() => {
    getLocationData();
  }, [getLocationData]);

  // Update local state when location data changes
  useEffect(() => {
    updateLocalLocation();
  }, [allLocationData, coords, updateLocalLocation]);

  // Check if the user's location is already stored, else send it
  useEffect(() => {
    if (coords && allLocationData.length > 0) {
      const locationExists = allLocationData.some(
        (loc) =>
          loc.latitude === coords.latitude.toString() &&
          loc.longitude === coords.longitude.toString()
      );

      if (!locationExists) {
        sendLocationData();
      }
    }
  }, [coords, sendLocationData, allLocationData]);

  const highlightCurrentLocation = (loc) => {
    if (coords && loc) {
      const lat1 = parseFloat(loc.latitude);
      const lng1 = parseFloat(loc.longitude);
      const lat2 = coords.latitude;
      const lng2 = coords.longitude;
  
      const latDiff = Math.abs(lat1 - lat2);
      const lngDiff = Math.abs(lng1 - lng2);
  
      const tolerance = 0.0001; // Adjust as needed
  
      return latDiff < tolerance && lngDiff < tolerance;
    }
    return false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="location-wrapper">
      <ParticleBackground />
      <Container fluid>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="section-header text-center mb-5"
            variants={itemVariants}
          >
            <h1 className="location-title">
              Global <span className="highlight">Presence</span>
            </h1>
            <p className="tech-subtitle">
              Track and share your location across the digital frontier
            </p>
          </motion.div>

          {loading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" className="loading-spinner" />
            </div>
          )}
          
          {errorMessage && (
            <Alert variant="danger" className="error-alert">
              {errorMessage}
            </Alert>
          )}

          <Row>
            <Col md={6}>
              <motion.div 
                className="location-card p-4 mb-4"
                variants={itemVariants}
              >
                <h3 className="neon-text mb-4">
                  <BiWorld className="me-2" />
                  Your Location
                </h3>
                
                {state && (
                  <div className="coordinates-info">
                    <div>
                      <span className="coordinate-label">State:</span> {state}
                    </div>
                    <div>
                      <span className="coordinate-label">Country:</span> {country}
                    </div>
                  </div>
                )}

                <Form.Group controlId="userMessage">
                  <Form.Label className="text-light">Leave your mark:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Share a message about your location..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="location-input mb-3"
                  />
                </Form.Group>

                <motion.button
                  className="tech-button w-100"
                  onClick={sendLocationData}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Message
                </motion.button>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div 
                className="location-card p-4"
                variants={itemVariants}
              >
                <h3 className="neon-text mb-4">
                  Global Check-ins ({allLocationData.length})
                </h3>
                
                <div className="table-container">
                  <Table hover variant="dark" className="tech-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>When</th>
                        <th>Message</th>
                        <th>State</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allLocationData.map((loc, index) => {
                        const isHighlighted = highlightCurrentLocation(loc);
                        const timestamp = formatDistanceToNow(
                          new Date(parseInt(loc.timestamp, 10) * 1000),
                          { addSuffix: true }
                        );
                        
                        return (
                          <motion.tr
                            key={index}
                            className={isHighlighted ? "highlight-row" : ""}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <td>{index + 1}</td>
                            <td>{timestamp}</td>
                            <td>{loc.message || "No message"}</td>
                            <td>{loc.state || "N/A"}</td>
                            <td>{loc.country || "N/A"}</td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </motion.div>
            </Col>
          </Row>

          {coords && (
            <motion.div
              className="map-container mt-4"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <ComposableMap
                projectionConfig={{
                  scale: 205,
                  rotation: [-101, 0, 0],
                }}
                width={900}
                height={400}
              >
                <ZoomableGroup
                  center={[coords.longitude, coords.latitude]}
                  zoom={1.5}
                >
                  <Geographies
                    geography="/features.json"
                    stroke="var(--primary-neon)"
                    strokeWidth={0.3}
                  >
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: "rgba(66, 129, 151, 0.3)",
                              stroke: "var(--primary-neon)",
                              strokeWidth: 0.3,
                              outline: "none",
                            },
                            hover: {
                              fill: "rgba(255, 255, 255, 0.2)",
                              stroke: "var(--primary-neon)",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {allLocationData.map((location, index) => (
                    <Marker
                      key={index}
                      coordinates={[location.longitude, location.latitude]}
                    >
                      <g
                        transform="translate(-5, -10)"
                        className="location-marker"
                      >
                        <MdLocationOn size={10} color="var(--primary-neon)" />
                      </g>
                    </Marker>
                  ))}

                  <Marker coordinates={[coords.longitude, coords.latitude]}>
                    <g
                      transform="translate(-3.5, -3.5)"
                      className="current-location-marker"
                    >
                      <FaLocationCrosshairs
                        size={7}
                        color="var(--primary-neon)"
                      />
                    </g>
                    <text
                      textAnchor="middle"
                      dy={-15}
                      style={{
                        fontSize: "5px",
                        fill: "var(--primary-neon)",
                        filter: "drop-shadow(0 0 2px var(--primary-neon))",
                      }}
                    >
                      You are here
                    </text>
                  </Marker>
                </ZoomableGroup>
              </ComposableMap>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}

export default LocationHome;
