import Head from 'next/head';
import { PostCard, Categories, PostWidget, ConnectWallet, Button } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'
import web3Button from '../components';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The BlogSpot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       <web3Button />
      </div>
      <FeaturedPosts />  
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
          <PostCard post={post.node} key={post.title} />
        ))}       
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>    
    </div>
  )

}

// for fetching the data using getStaticProps 
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

