import ViewButton from "../components/ViewButton";
import CardList from "../components/CardList";
import React from "react";
import NewsItem from "../components/NewsItem";

export default function News() {
  return (
    <>
      <NewsItem />
      <ViewButton />
      <CardList title={"PODCAST"} />
    </>
  );
}
