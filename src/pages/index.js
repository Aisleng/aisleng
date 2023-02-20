import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Aisleng Logo"
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
