import Jumbotron from "../components/Jumbotron";
import CardList from "../components/CardList";
import Crews from "../components/Crews";
import ViewButton from "../components/ViewButton";
import React from "react";

export default function Listen() {
  return (
    <>
      <Jumbotron />
      <CardList title={"LATEST PODCAST"} />
      <ViewButton />
      <Crews />
    </>
  );
}
