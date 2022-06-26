import React from "react";
import axios from "axios";
import Layout from "../view/layout";

export async function getServerSideProps({ req, res }) {
  // The serverData added to res object was inject in via customer express server custom-server/routes/pages
  console.log("Hyrdated data from server: ", res.serverData)
  return {
    props: {
      counter: parseInt(res.serverData.counter),
    },
  };
}

const PreloadDataExample = (props) => {
  const [value, setValue] = React.useState(props.counter);
  const increment = async () => {
    const res = await axios.post("/api/increment");
    setValue(res.data.counter);
  };
  return (
    <Layout>
      <h2>Preloaded data</h2>

      <p> The data for this page was pre-fetched</p>
      <p>
        Its initial state (Increment counter) is loaded from server, increments
        are done via API{" "}
      </p>
      <p>
        Increment is stored on backend - so it survives page refreshes (but not
        server restarts: the data is in memory).
      </p>
      <p>
        Traditionally in React we serve the page first and then, have it fetch
        the data afterwards. See <a href="/load_data_via_api">this example</a>.
      </p>

      <div className="f-row">
        <h2 style={{ marginRight: "6vw" }}> {value} </h2>
        <button style={{ width: "max(12vw, 60px)" }} onClick={increment}>
          +
        </button>
      </div>
      <div style={{ marginBottom: "2vh" }} />
      <a href="/"> Back </a>
    </Layout>
  );
};

export default PreloadDataExample;
