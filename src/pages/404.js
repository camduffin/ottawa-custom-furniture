import * as React from "react"
import Seo from "../components/Seo"
import * as errorStyles from '../components/home.module.scss'
import { Link } from 'gatsby'

const NotFoundPage = () => (
    <section className={errorStyles.errorSection}>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go Back</Link>
    </section>
)

export default NotFoundPage
