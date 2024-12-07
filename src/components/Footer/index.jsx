import React from 'react'
import Facebook from "../../assets/facebook-icon.png"
import Twitter from "../../assets/twitter-icon.png"
import Youtube from "../../assets/youtube-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import Instagram from "../../assets/instagram-icon.png"

import S from '../Footer/footer.module.scss'

export default function footer() {
  return (
    <div>
      <section className={S.firstSectionFooter}>
        <p>4002-8922</p>

        <div className={S.boxIcons}>
            <a href="#">
                <img src={Facebook} alt="Facebook-icon" />
            </a>
            <a href="#">
                <img src={Twitter} alt="twitter-icon" />
            </a>
            <a href="#">
                <img src={Youtube} alt="youtube-icon" />
            </a>
            <a href="#">
                <img src={Linkedin} alt="linkedin-icon" />
            </a>
            <a href="#">
                <img src={Instagram} alt="instagram-icon" />
            </a>
        </div>
      </section>
    </div>
  )
}
