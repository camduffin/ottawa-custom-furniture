import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router";

function Seo({ description, lang, image, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const defaultImage = site.siteMetadata.image
  const siteUrl = site.siteMetadata.siteUrl
  const siteKeywords = site.siteMetadata.keywords

  const { pathname } = useLocation();

    const seo = {
        title: defaultTitle,
        description: metaDescription,
        image: defaultImage,
        url: `${siteUrl}${pathname}`,
        canonical: `${siteUrl}${pathname}`,
        keywords: siteKeywords
    }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      // meta={[
      //   {
      //     name: `description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:title`,
      //     content: title,
      //   },
      //   {
      //     property: `og:description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:type`,
      //     content: `website`,
      //   },
      //   {
      //     name: `twitter:card`,
      //     content: `summary`,
      //   },
      //   {
      //     name: `twitter:creator`,
      //     content: site.siteMetadata?.author || ``,
      //   },
      //   {
      //     name: `twitter:title`,
      //     content: title,
      //   },
      //   {
      //     name: `twitter:description`,
      //     content: metaDescription,
      //   },
      // ].concat(meta)}
    > 

<meta name="description" content={seo.description} />

<link rel="canonical" href={seo.canonical}/>

<meta name="keywords" content={seo.keywords}/>

{seo.url && <meta property="og:url" content={seo.url} />}

{seo.title && <meta property="og:title" content={seo.title} />}

{seo.description && ( <meta property="og:description" content={seo.description} /> )}

{seo.image && <meta property="og:image" content={seo.image} />}

<meta name="twitter:card" content="summary_large_image" />

{seo.title && <meta name="twitter:title" content={seo.title} />}

{seo.description && (<meta name="twitter:description" content={seo.description} />)}

{seo.image && <meta name="twitter:image" content={seo.image} />}

    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "url": "https://www.ottawacustomfurniture.ca/",
            "name": "Ottawa Custom Furniture",
            "image": "/conferenceNew.jpg",
            "logo": "/logo-ottawa.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ottawa",
              "addressRegion": "ON",
              "addressCountry": "CA"
          },
            "email": "mailto:contact@ottawacustomfurniture.ca",
            "description": "Custom furniture designed and built by Murray Spencer in Ottawa, Canada.",
            "sameAs": ["https://www.instagram.com/ottawacustomfurniture/"],
        })}
    </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo;
