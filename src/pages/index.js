import React from "react"
import { Link } from "gatsby"
import { Grid, GridContainer} from "unsemantic"
// Not sure how you got 'grid' to work

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import exploreWineCounty from "../img/explore-wine-country.jpg"
/*
import DefaultCSS from "../components/global.css"
import Grid from "../components/unsemantic.css"
import RespnsiveGrid from "../components/unsemantic-grid-responsive-tablet-no-ie7.css"
*/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bigImageHeader">
		  
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Explore the Wine Country</h1>
          	</div>
          	
          	<div className="hero-overlay"></div>
          	<img src={ exploreWineCounty } alt="Mustard Vines" className="wineryImage" />
    </div> 
    <Grid>
	    Test
    </Grid>
    <h1>Hi people!!!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
