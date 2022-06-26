import Head from 'next/head'
import Layout from '../view/layout'

export default function GithubProfile({data}) {

  return (
    <Layout home url={data.avatar_url}>
      <Head>
        <title>Github example</title>
      </Head>
      <section>
        <p>{data.login}</p>
        <p>
         This is pre-rendering data on the NextJS server
        </p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://api.github.com/users/xXValhallaCoderXx`)
  const data = await res.json();

  return { props: { data } };
}
