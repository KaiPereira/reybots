import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reybots</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="description" content="Reybots is not just about building robots, it is about learning, teaching, and inspiring, STEM, and FIRST. All while having fun." />
        <meta name="keyword" content="Reybots, Robotics, FRC, FTC, STEM, FIRST, Reynolds, technology, robots" />
        <meta name="author" content="Kai Pereira, Tyler Stocks" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
