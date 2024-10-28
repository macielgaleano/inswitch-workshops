// src/App.tsx

import { Profile } from "./views/entity-balance";
import EntityBalance from "./views/entity-balance";
import Gallery from "./views/entity-info";
import MasterBalance from "./views/master-balance";

function App() {
  return (
    <>
      <MasterBalance />
      <EntityBalance />
      <Profile />
      <Gallery />
    </>
  );
}

export default App;
