import React from 'react'
import axios from "axios";
import Layout from '../view/layout'

const LoadDataViaApi = (props) => {
  const [value, setValue] = React.useState(null);

  const increment = async () => {
    const res = await axios.post("/api/increment");
    setValue(res.data.counter);
  }

  React.useEffect(() => {
    // Fake delayed API
    setTimeout(async () => {
      const res = await axios.get("/api/get");
      setValue(res.data.counter);
    }, 2000)
  }, [])

  if(!value) {
    return <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{textAlign: "center", marginTop: "20vh"}}>
        Loading...
      </h1>
    </div>
  }
  return <Layout>
    <h2>Data fetch on client side</h2>
    <p>This is a common pattern in modern applications, especially for Single Page Applications.</p>
    <div className="f-row">
      <h2 style={{marginRight: "6vw"}}> {value} </h2>
      <button  style={{width: "max(12vw, 60px)"}} onClick={increment}> + </button>
    </div>
    <div style={{marginBottom: "2vh"}}/>
    <a href="/"> Back </a>
  </Layout>
  
}

export default LoadDataViaApi
