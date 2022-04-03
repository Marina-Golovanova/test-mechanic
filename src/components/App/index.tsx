import React from "react";
import { Layout } from "../Layout";
import { Card } from "../Card";

export const App: React.FC = React.memo(function App() {
  return (
    <>
      <Layout>
        <Card />
      </Layout>
    </>
  );
});
