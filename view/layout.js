import React from "react";
import Head from "next/head";

const renderBack = (backPath) => {
  return (
    <a style={{ position: "fixed", fontSize: "3vh" }} href={backPath}>
      {" "}
      Back{" "}
    </a>
  );
};

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>NextJS+ExpressJS!</title>
      </Head>
      {props.backPath ? renderBack(props.backPath) : ""}
      {props.img ? (
        <img
          src={props.url}
          style={{ borderRadius: "50%" }}
          height={144}
          width={144}
        />
      ) : null}
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          paddingTop: "16px",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
