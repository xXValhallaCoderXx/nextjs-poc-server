import React from "react";
import Layout from "../../view/layout";

export async function getServerSideProps({ req, res }) {
  // urlValue name is defined on the backend.
  return {
    props: {
      value: parseInt(req.params.urlValue),
    },
  };
}

export default function SpecialLarge(props) {
  return (
    <Layout>
      <h1> Huge value from link: {props.value} </h1>

      <p>
        The backend logic for this route renders a different page depending on
        the value. (currently {props.value}).{" "}
      </p>
      <p>
        {" "}
        If the value {"<"} 5, a <small>smaller header</small> is rendered.{" "}
      </p>
      <div style={{ marginBottom: "5vh" }} />
      <div className="f-col">
        <a href="/"> Home </a>
        <div style={{ marginBottom: "5vh" }} />
        <div
          className="f-row f-j-space-between"
          style={{ width: "max(40%, 256px)" }}
        >
          <a href={`/conditional/${props.value - 1}`}>
            {" "}
            Access Page With Lower Value{" "}
          </a>
          <a href={`/conditional/some-wrong-string`}> Invalid Route </a>
          <a href={`/conditional/${props.value + 1}`}>
            {" "}
            Access Page With Higher Value{" "}
          </a>
        </div>
      </div>
    </Layout>
  );
}
