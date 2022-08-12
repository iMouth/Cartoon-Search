import React, { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import DataTable from "./DataTable";
import "./Leaderboard.css";

const Leaderboard = ({ mapInfo, db }) => {
  async function sortData() {
    const docRef = doc(db, "leaderboard", map);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const sortedData = Object.fromEntries(Object.entries(data).sort(([, a], [, b]) => a - b));
    setData(sortedData);
  }

  const [data, setData] = useState({});
  useEffect(() => {
    sortData();
  }, []);

  let { map } = useParams();
  if (!mapInfo[map]) {
    return <Navigate to="/" />;
  }
  const mapAlt = map.split("-").join(" ").toUpperCase();

  return (
    <div id="Leaderboard">
      <div className="header-lb">
        <Link to={"/game/" + map}>&#x2190;</Link>
        <h1>Leaderboard</h1>
        <span style={{ visibility: "hidden" }}>&#x2190;</span>
      </div>
      <div className="leaderboard-content">
        <div className="leaderboard-header">{mapAlt}</div>
        <div className="leaderboard-times">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
