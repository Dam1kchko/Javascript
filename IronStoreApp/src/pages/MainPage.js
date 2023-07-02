import { Segment } from "semantic-ui-react";
import { React, ReactDOM } from "../utils/reactUtils";
import PageTitle from "../components/PageTitle";
import SearchSection from "../components/SearchSection";
import IronStorelist from "../containers/IronStoreList";

const MainPage = () => {
  return (
    <Segment textAlign="center">
      <PageTitle />
      <SearchSection />
      <IronStorelist />
    </Segment>
  );
};

export default MainPage;
