import React, { useState, useEffect } from "react"
import styles from "../scss/navigation.module.scss"
import { Link } from "react-router-dom"

const navigation = props => {
  console.log(window.innerWidth)
  const [activeAboutPage, setActiveAboutPage] = useState(false)
  const [activeWorkPage, setActiveWorkPage] = useState(false)
  const [activeContactPage, setActiveContactPage] = useState(false)

  const [showNav, setShowNav] = useState(false)
  // const [showNavSmall, setShowNavSmall] = useState(false)

  const onClick = e => {
    switch (e) {
      case "about":
        setActiveAboutPage(true)
        setActiveWorkPage(false)
        setActiveContactPage(false)
        break
      case "work":
        setActiveAboutPage(false)
        setActiveWorkPage(true)
        setActiveContactPage(false)
        break
      case "contact":
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(true)
        break
      case "home":
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(false)
        break
      default:
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(false)
    }
  }
  useEffect(() => {
    let pathName = window.location.pathname
    if (pathName === "pson0001.github.io/pingss-cv/") {
      setActiveAboutPage(false)
      setActiveWorkPage(false)
      setActiveContactPage(false)
    } else if (pathName === "pson0001.github.io/pingss-cv//AboutMe") {
      setActiveAboutPage(true)
      setActiveWorkPage(false)
      setActiveContactPage(false)
    } else if (pathName === "pson0001.github.io/pingss-cv//Contact") {
      setActiveAboutPage(false)
      setActiveWorkPage(false)
      setActiveContactPage(true)
    } else {
      setActiveAboutPage(false)
      setActiveWorkPage(true)
      setActiveContactPage(false)
    }
  })
  useEffect(() => {
    let pathName = window.location.pathname
    if (pathName !== "/") {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  })

  // const windowWith = window.innerWidth
  // useEffect(() => {
  //   if (windowWith < 1001) {
  //     setShowNavSmall(true)
  //   } else {
  //     setShowNavSmall(false)
  //   }
  // }, [])

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navBar}>
        <li>
          <Link to="/">
            <div className={styles.logoImage} onClick={() => onClick("home")} />
          </Link>
        </li>
        {showNav ? (
          <ul>
            <Link to="/AboutMe" onClick={() => onClick("about")}>
              <li
                className={
                  activeAboutPage
                    ? [styles.aboutYellow, styles.cliked].join(" ")
                    : styles.aboutYellow
                }
              >
                <span>ABOUT ME</span>
              </li>
            </Link>
            <Link to="/Work" onClick={() => onClick("work")}>
              <li
                className={
                  activeWorkPage
                    ? [styles.workPink, styles.cliked].join(" ")
                    : styles.workPink
                }
              >
                <span>WORK</span>
              </li>
            </Link>
            <Link to="/Contact" onClick={() => onClick("contact")}>
              <li
                className={
                  activeContactPage
                    ? [styles.contactBlue, styles.cliked].join(" ")
                    : styles.contactBlue
                }
              >
                <span>PING ME</span>
              </li>
            </Link>
          </ul>
        ) : null}
      </ul>

      <div>
        <input type="checkbox" id={styles.menuToggle} />
        <label id={styles.trigger} htmlFor={styles.menuToggle} />
        <label id={styles.burger} htmlFor={styles.menuToggle} />
        <ul id={styles.menu}>
          <li>
            <a href="https://pson0001.github.io/pingss-cv/AboutMe">ABOUT ME</a>
          </li>
          <li>
            <a href="https://pson0001.github.io/pingss-cv/Work">WORK</a>
          </li>
          <li>
            <a href="https://pson0001.github.io/pingss-cv/Contact">PING ME</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navigation
