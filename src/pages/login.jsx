import Login from '@/components/Login'
import Head from 'next/head'
import React from 'react'

const LoginComp = () => {
    function addProductJsonLd() {
        return {
            __html: `{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Executive Anvil",
          "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
           ],
          "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
          "sku": "0446310786",
          "mpn": "925872",
          "brand": {
            "@type": "Brand",
            "name": "ACME"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Fred Benson"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.4",
            "reviewCount": "89"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://example.com/anvil",
            "priceCurrency": "USD",
            "price": "119.99",
            "priceValidUntil": "2020-11-20",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
          }
        }
      `,
        };
    }
    return (
        <>
            <Head>
                <title>
                    Navya || Login
                </title>
                <meta
                    name="description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    key="desc"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addProductJsonLd()}
                    key="product-jsonld"
                />
            </Head>
            <Login />
        </>
    )
}

export default LoginComp