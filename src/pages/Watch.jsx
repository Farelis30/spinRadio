import CardList from "../components/CardList";
import ViewButton from "../components/ViewButton";
import React from "react";

export default function Watch() {
  return (
    <>
      <CardList title={"WATCH"} isCategory={true} />
      <ViewButton />
      <CardList title={"TRENDING"} />
    </>
  );
}
