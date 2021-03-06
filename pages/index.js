import React from 'react'
import Head from 'next/head'
import Page from '../containers/page'
import css, {style, merge, after, $} from 'next/css'
import Animation from '../components/canvasAnim'
const stormy = '#494E6B';
const sunset = '#985E6D';
const evening = '#192231';

const heroBar = css({
  textAlign: 'center',
  height: '100vh',
  width: '100%',
  color:'white',
    background: [
      evening,
      `-webkit-linear-gradient(180deg, ${sunset} 0%,${evening}) 100%`,
      `linear-gradient(180deg, ${sunset} 0%,${evening} 100%)`
    ],
  height:'100vh',
});
const heading = merge({
  marginTop: '35vh',
  display: 'inline-block',
  marginBottom: '5em',
  color:'white',
  textAlign: 'center',
  position: 'relative',

},
  $(' h1', {fontFamily: 'Poiret One', fontSize: '6em', lineHeight:'1em',borderBottom:'1px solid rgba(255, 177, 197, 0.42)', marginBottom:'0.2em'}),
  $(' h2', {fontFamily: 'Poiret One', textTransform: 'uppercase', color: 'white', fontSize: '2.0em', lineHeight:'1em', margin:'0'}),
)

const divider = css({
    width: '100%',
    height: '12.5vw',
    marginBottom: '10em',
    backgroundSize: 'cover',
    top: '-1',
    position: 'absolute',
    zIndex: 5
})
const sectionStyle = (background = "white", textColor="white", gradient=[evening, stormy]) => 
  merge({
    background: background,
    backgroundSize:'cover',
    padding: '6em 0em 6em 0em',
    color: textColor,
    position: 'relative',
  },
  $(' .container', { zIndex: '2' }),
  $(' h1', { fontFamily: 'Lato', fontSize:'5em' }),
  $(' h2', { fontFamily: 'Lato', fontSize:'4em' }),
  $(' p', { color: textColor }),
  gradient ? 
    after({
      position: 'absolute',
      content:'""',
      height:'100%',
      width:'100%',
      top:'0',
      left:'0',
      opacity: '1.0',
      zIndex: 1,
      background: [
        sunset,
        `-webkit-linear-gradient(180deg, ${gradient[0]} 0%,${gradient[1]}) 100%`,
        `linear-gradient(180deg, ${gradient[0]} 0%,${gradient[1]} 100%)`
      ]
    }): {}
  )

const section1 = sectionStyle('white', 'white', [sunset, evening])
const section2 = sectionStyle('white', 'black', ['white','white'])
const section3 = sectionStyle('url(/static/planet.jpg)', 'white', null)
const section4 = sectionStyle('white', 'black', ['white','white'])

const learnmore = merge({
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: '1em',
  margin: 'auto',
  display: 'inline-block'
}, $(' .test', { background: 'url(static/down-arrow.svg)', width: '40px', height: '40px', margin: 'auto' }))
export default () => (
  <Page>
    <Animation />
    <header className={`header ${heroBar} `}>
      <div>
        <section className="container">
         
          <div className={`${heading}`}>
            <h1>AONYX</h1>
            <h2>reinsurance reimagined</h2>
          </div>

        </section>

      </div>
       <div style={{position: 'absolute', bottom: '50px', width: '100%'}}> <div className={learnmore}> LEARN MORE <div className="test"> </div></div></div>
    </header>
    <section className={section4}>
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column column-75">
              <h1 style={{fontSize:'3.5em', fontWeight: '100',textTransform:'uppercase', margin: '2.4em 0em 2em 0em'}}>
                <b>Aonyx</b> is a system built to enable a new kind of economic order.
              </h1>
            </div>
            <div className="column">
            </div>
          </div>
            <div className="row">
              <div className="column">
                <h5>Aonyx is a platform that enables automatic insurance and reinsurance data exchange distributed data exchange that is immutable, private, secure, and resilient. </h5>
              </div>
              <div className="column">
                <h5>It allows reinsurance companies to optimise current protocols and processes within an insurance organization so it can adapt to the universal, decentralized open ledger.</h5>
              </div>
            </div>
          </div>
      </section>
      <section className={section1} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom2.svg)"}}></div>
        <div className="container">
          <div className="row" style={{marginTop:'15em'}}>
            <div className="column">
            <h2>AONYX IS BUILT FOR INSURERS.</h2>
            </div>
          </div>
          <div className="row" style={{marginTop:'2em'}}>
            <div className="column">
              <div className="row">
                <div className="column">
                  
                  <h5>THE PROBLEM OF COMPLEX CLAIMS MANAGEMENT</h5>
                  <p>{`Insurance contracted between consumers and reinsurers are complex and require a substantial claim process between the three parties to ensure accurate and fair claims are made.`}</p>
                </div>
              </div>
            </div>
            <div className="column">
              <img src='/static/connected.svg' width='100%' />
            </div>  
          </div>
        </div>

      </section>

      <section className={section2} >
        <div className={divider} style={{backgroundImage: "url(/static/tri-bottom.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row">
                <div className={`column ${style({ textAlign: 'center', marginTop: '10em'})}`}>
                  <div style={{backgroundImage:'url(/static/subsidies.svg)', width:'200px', height:'200px', display:'inline-block'}}></div>
                  <h2>Rethink Subsidies</h2>
                  <h5>Frictionless, Trustless, Transparent.</h5>
                  <p >{
                    `With Aonyx's DP2P core, a new way to subsidize activities and public services becomes possible. 
                    As supply and demand appers on the marketplace for various services, governments, from municipal to federal, 
                    and even non-governmental actors, can actively perturb the market by offering subsidies for economic activity 
                    that they believe to be in the public's interest. In place of the long-term and wide-scale subsidies that came 
                    before, subsidies in this model can be hyper-granular. From minute-by-minute subsidies in the case of power 
                    outtages or disasters, to location-specific relief in others.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={section3} >
      <div className={divider} style={{backgroundImage: "url(/static/tri-bottom3.svg)"}}></div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" style={{marginTop:'10em'}}>
                <div style={{backgroundImage:'url(/static/people-connected.svg)', width:'500px', height:'500px', margin:'auto'}}></div>
                
              </div>
            </div>
          </div>
          <div className="row">
          <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h2>Public-Private Partnerships for the 21st Century</h2>
                  
          </div>


          <div className={`column ${style({ textAlign: 'left'})}`}>
                  <h4>A great idea taken to the next level.</h4>
                  <p></p>
                  <p>{
                    `There are many benefits to the traditional Public-Private partnership, but we can do better than the traditional model.
                    Aonyx enables the creation of ad-hoc Public-Private Partnerships as a natural corollary of the DP2P core and dynamic 
                    subisidy mechanisms it enables. Since providers in the netwwork can be anyone from private citizens to private companies, 
                    contractual agreements can happen on-the-fly, and subsidies can appear with hyper-granularity, shortlived or longterm 
                    partnerships will happen without the huge overhead assumed today.`}</p>
                </div>
          </div>
        </div>
      </section>
      <section className={section2}>
        <div className="container">
          <div className="row">
              <div className="column">
              
                  <h2 style={{textTransform: 'uppercase'}}>Restarted global economic growth, fresh investment opportunities.</h2>
                </div>
          </div>
          <div className="row">
              <div className="column-75 column" style={{margin: '2em 0em 2em 0em'}}>
                  <h5>{
                    `The side-effects that follow from deploying Aonyx in a city
                    produce and expose data useful to investors, insurers, and
                    anyone wishing to improve modeling of trade positions.
                    Derivative markets that form to trade against these
                    movements will also allow hedging against exposures that were
                    previously impossible.`}</h5>
                </div>
          </div>

          <div className="row">
            <div className="column">
              <img src="static/line-graph.svg" width="100"/>
              <h5>Price Signaling</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <img src="static/networking.svg" width="100"/>
              <h5>Derivative Markets</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
            <div className="column">
              <img src="static/nodes.svg" width="100"/>
              <h5>Novel Arbitrage</h5>
              <p>The market rates that dynamically form for various
            services are exposed in the aggregate. This means they
            are accessible in a granular time-scale, with always
            up-to-date information, and granular locality, exposing
            differences between regions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={section3}>
         <div className="container">
          <div className="row">
            <div className="column">
              <div className="row" >
                <div >
                  <h2>CALL TO ACTION</h2>
                  <h5>Newsletter subscription</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  </Page>
)
