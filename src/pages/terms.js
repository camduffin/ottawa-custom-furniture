import * as React from "react"
import * as termsStyles from "../components/contact.module.scss"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Terms from "../components/Terms"

const TermsPage = () => {
  return (
    <Layout>
      <Seo title="Terms" />
      <div className={termsStyles.termsWrapper}>
        <section className={termsStyles.termsSection}>
          <Terms />
          <AniLink to="/">
            <button>Home</button>
          </AniLink>
        </section>
      </div>
    </Layout>
  )
}

export default TermsPage
