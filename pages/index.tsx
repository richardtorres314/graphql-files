import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { missions } from "queries/mission.graphql";

const Missions: NextPage = () => {
  const { data, loading, error } = useQuery(missions);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading missions.</p>;
  }

  return <p>Total SpaceX missions: {data?.launchesPast.length}</p>;
};

export default Missions;
