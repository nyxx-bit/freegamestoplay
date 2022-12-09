import React from "react";
import GameItem from "./GameItem";
import Spinner from "../ui/Spinner";

const GameGrid = ({ items, isLoading, filteredResult, searchInput }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {searchInput.length > 1
        ? filteredResult.map((item) => (
            <GameItem key={item.id} item={item}></GameItem>
          ))
        : items.map((item) => <GameItem key={item.id} item={item}></GameItem>)}
    </section>
  );
};

export default GameGrid;
