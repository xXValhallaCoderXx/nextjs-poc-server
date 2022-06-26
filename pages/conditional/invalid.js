import React from "react";
import Layout from "../../view/layout";

export async function getServerSideProps({ req, res }) {
  // urlValue name is defined on the backend.
  return {
    props: {
      value: req.params.urlValue,
    },
  };
}

const InvalidValue = (props) => {
  return (
    <Layout>
      <h1> Invalid value: '{props.value}'. </h1>
      <p>
        The backend logic for this route renders a different page depending on
        the value.
      </p>
      <p> Only integers are considered valid input. </p>
      <div className="f-col">
        <a href="/conditional/5"> Happy Path </a>
        <div style={{ marginBottom: "2vh" }} />
        <a href="/"> Go back </a>
      </div>
    </Layout>
  );
};

export default InvalidValue;
