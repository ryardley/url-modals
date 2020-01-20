import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout footer={<Layout.Footer />}>
      <div>I am Home</div>
    </Layout>
  );
}
