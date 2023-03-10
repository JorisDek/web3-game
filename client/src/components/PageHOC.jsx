import { useNavigate } from 'react-router-dom'

import { useGlobalContext } from "../context"
import { logo, heroImg } from '../assets/'
import styles from '../styles'
import Alert from "./Alert";

const PageHOC = (Component, title, description) => () => {
  const {showAlert} = useGlobalContext()
  const navigate = useNavigate()

  return (
      <div className={styles.hocContainer}>
        {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}
        <div className={styles.hocContentBox}>
          <img src={logo}
               alt="logo"
               className={styles.hocLogo}
               onClick={() => navigate('/')}
          />
          <div className={styles.hocBodyWrapper}>
            <div className="flex flex-row w-full">
              <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
            </div>
            <p className={`${styles.normalText} my-10`}>{description}</p>
            <Component />
          </div>
          <p className={styles.footerText}>Made with 💜 by Dragster66</p>
        </div>
        <div className="flex flex-1">
          <img
              className="w-full xl:h-full object-cover"
              src={heroImg}
              alt="hero-img"/>
        </div>
      </div>
  )
}

export default PageHOC