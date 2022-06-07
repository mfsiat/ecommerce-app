import React from 'react'
import { FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'


const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  )
}

// fetch data from sanity
export const getServerSideProps = async () => {
  // fetch product query
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  // fetch product query
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default index