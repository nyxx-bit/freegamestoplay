import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import GameGrid from "../games/GameGrid";
import Search from "../ui/Search";
import Pagination from "../ui/Pagination";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = items.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(20);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios({
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: { "sort-by": "popularity" },
        headers: {
          "X-RapidAPI-Key":
            "9534b6cb59mshc7388f1b1bf375fp17ca04jsn9523b5e9a149",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items);
    }
  };

  return (
    <div className="container">
      <Header />
      <Nav />
      <Search getQuery={searchItems} />
      <GameGrid
        isLoading={isLoading}
        items={currentRecords}
        filteredResult={filteredResults}
        searchInput={searchInput}
      />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
