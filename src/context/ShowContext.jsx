import { createContext, useState, useEffect } from "react";

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return <ShowContext.Provider value={shows}>{children}</ShowContext.Provider>;
};
