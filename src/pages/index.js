import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Banner from "../components/banner"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home - Resume" />
    {/* <h1>Hi people</h1> */}
    {/* <p>Welcome to your new Gatsby site.</p> */}
    {/* <p>Now go build something great.</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
    {/* </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Banner />
    <div className="row">
        <div className="col-lg-8">
            <section>
                <h2>Indroduction</h2>
                <p>Software Developer that specializes in web development and media design. Exposed to using
                    Docker, Linux, Bash, Powershell, and the love of crafting useful scripts.</p>
            </section>
            <section>
                <h2>Experience</h2>
                <strong>Audio Visual Technician, 2017-Current</strong><br />
                Snow College, Ephraim, UT
                <ul>
                    <li>Communication with students and faculty</li>
                    <li>Develop documentation and graphics</li>
                    <li>Manage expensive audio and visual equipment</li>
                </ul>
                <strong>Web Assistant, 2015-2019</strong><br />
                Snow College, Ephraim, UT
                <ul>
                    <li>Update and maintain Snow.edu</li>
                    <li>Know ins and outs of OmniUpdate</li>
                    <li>Design and develop layouts and templates</li>
                </ul>
                <strong>Cleaner/Mechanic/Forklift Driver, Summer 2014-2017</strong><br />
                Payson Fruit Growers, Payson, UT
                <ul>
                    <li>Repair, maintain, and drive heavy machinery</li>
                    <li>Watchful and alert for other workers; no one ever injured</li>
                </ul>
            </section>
            <section>
                <h2>Leadership</h2>
                <p>
                    <strong>Coding Camp Teach — 2015-2017</strong><br />
                    Snow College, Ephraim UT
                </p>
                <p>
                    <strong>Badger Orientation Leader — 2015</strong><br />
                    Snow College, Ephraim UT
                </p>
                <p>
                    <strong>Teaching English as a Second Language — 2015</strong><br />
                    Snow College, Ephraim UT
                </p>

            </section>
        </div>
        <div className="col-lg-4">
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>Writing</li>
                    <li>CSS/SASS/LESS</li>
                    <li>Javascript</li>
                    <li>UI/UX</li>
                    <li>Design</li>
                    <li>Wordpress</li>
                    <li>Docker</li>
                    <li>Bash</li>
                    <li>VMs</li>
                    <li>Linux</li>
                    <li>XML</li>
                    <li>XSLT</li>
                    <li>SQL</li>
                    <li>Writing</li>
                    <li>Communication</li>

                </ul>
            </section>
            <section>
                <h2>Coursework</h2>
                <ul>
                    <li>Fundamentals of Programming</li>
                    <li>Object Oriented Programming</li>
                    <li>Secure Coding</li>
                    <li>Graphical User Interfaces</li>
                    <li>Technical Writing</li>
                    <li>Interpersonal Communication</li>
                </ul>
            </section>
            <section>
                <h2>Education</h2>
                <p>
                    <strong>BS, Software Engineering</strong><br />
                    Snow College, Ephraim, UT<br />
                    2017-Current
                </p>
                <p>
                    <strong>AS, Computer Science</strong><br />
                    Snow College, Ephraim, UT<br />
                    2014-2017
                </p>
            </section>
        </div>
    </div>
    <script>
        var navbar = document.getElementById("main-nav");
        navbar.classList.add("d-none");
    </script>
  </Layout>
)

export default IndexPage
