import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShowContext } from "../context/ShowContext";
import Modal from "../components/Modal";

const Summary = () => {
  const { id } = useParams();
  const shows = useContext(ShowContext);
  const sameShow = shows.filter((show) => {
    return show.show.id === parseInt(id);
  });
  const show = sameShow[0].show;
  console.log("sdf", show);
  console.log("sdf", show.name);
  const regex = /(<([^>]+)>)/gi;

  return (
    <>
      <div class="container  ">
        <h2 className="text-center mb-5">Movie Details</h2>
        <div class="row">
          <div class="col-sm-4">
            <img
              src={
                show.image?.medium
                  ? show.image?.medium
                  : `https://www.gifpng.com/300`
              }
              className="rounded mx-auto d-block img-thumbnail inline"
              alt={show?.name}
            />
          </div>
          <div class="col-sm-8">
            <div>
              <h2 className="card-title my-2">{show?.name}</h2>
              {<>{show?.summary.replace(regex, "")}</>}
            </div>
            <div className="my-3">
              <Modal show={show} />
            </div>
            <div className="fst-italic my-2">
              Premiered : {show?.premiered ? show.premiered : "NA"}
            </div>
            <div className="fst-italic my-2">
              Ended : {show?.ended === null ? "NA" : show.ended}
            </div>
            <div className="fst-italic my-2">
              Avg. Run-Time :{" "}
              {show?.averageRuntime ? show.averageRuntime : "NA"}
            </div>
            <div className="fst-italic">
              Network Name : {show.network?.name ? show.network.name : "NA"}
            </div>
            <div className="fst-italic">
              Site :
              <a
                href={show?.officialSite}
                target="_blank"
                class="text-decoration-none"
              >
                {show.officialSite ? show.officialSite : "NA"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
