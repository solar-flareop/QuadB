import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShowContext } from "../context/ShowContext";
import Loading from "../components/Loading";

const Home = () => {
  const shows = useContext(ShowContext);
  return (
    <>
      {!shows ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap  p-2 justify-content-evenly p-3 mb-2 bg-secondary text-dark">
          {shows.map((show) => (
            <div
              key={show.show.id}
              className="card mt-5 p-3"
              style={{ width: "18rem" }}
            >
              <img
                src={
                  show.show.image?.medium
                    ? show.show.image?.medium
                    : `https://www.gifpng.com/300`
                }
                className="rounded float-start img-fluid"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{show.show.name}</h5>
                <p className="text">Type : {show.show.type}</p>
                <p className="text">Language : {show.show.language}</p>
                <p className="fst-italic fw-bolder">
                  Rating :{" "}
                  {show.show.rating.average ? show.show.rating.average : "NA"}
                </p>
                <div>
                  {show.show.genres.map((genre) => (
                    <span className="badge bg-warning text-dark m-1">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="d-flex wrap-nowrap m-3 text-center ">
                <Link to={`/summary/${show.show.id}`}>
                  <button type="button" className="btn btn-primary p-2  ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
