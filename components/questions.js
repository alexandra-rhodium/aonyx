import React from 'react'
import {textCard} from './mission'
import {textCardYellow} from './problem'
import css, {style, merge, after, $} from 'next/css'
import {yellow, dark,blue} from '../constants/colors'


const person = style({
  background: "url(/static/svg/05_person.svg)",
  width: "250px",
  height: "400px",
  position: "absolute",
  zIndex: "200",
  backgroundRepeat: "no-repeat",
  left: "6rem",
  marginTop: "-7em",
  fontFamily: 'Work Sans',
  padding: "1em",
  fontSize: "19px",
  textAlign: "center",
  color: dark,
  textTransform: "uppercase"
})


export default () => (
    <section className={'container'} style={{marginTop:'5em', marginBottom: '5em'}}>
      <div className="row">
        
        <div className="column column-30">
          <div className={person}>
            Why are we <br/> 
            trusting them <br/>
            when they <br/>
            cannot keep up?
          </div>
        </div>
        <div className="column column-60 column-offset-10">
          <div className={textCardYellow}>
            <p className={'large'}>
              {"Traditional models use legacy calculations for risk analysis. This results in little adoption of available technologies. \
              Today, it is a requirement for innovative industries to have a software first understanding of communication, \
              data and a security. "}
            </p>
          </div>
        </div>
      </div>
    </section>
)
