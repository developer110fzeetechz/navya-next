

import '@/styles/globals.css'
import Layout from '@/components/layout'
import React from 'react'
import LoaderComponent from '@/Helper/LoaderComponent'
import { Toaster } from 'react-hot-toast'

 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Toaster/>
     <LoaderComponent/>
      <Component {...pageProps} />

    </Layout>
  )
}

