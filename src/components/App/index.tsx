import React from "react";
import { Layout } from "../Layout";
import { TestMechanicsCard } from "../TestMechanicsCard";

export const App: React.FC = React.memo(function App() {
  return (
    <>
      <Layout>
        <TestMechanicsCard />
      </Layout>
    </>
  );
});
