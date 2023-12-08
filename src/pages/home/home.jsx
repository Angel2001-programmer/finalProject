import { Fragment } from 'react'
import NavBar from '../../components/NavBar/navbar';
import styles from "./home.module.css";
import HomeItem from "../../components/HomeItem/HomeItem";
export default function Home() {  
  return (
    <Fragment>
    <NavBar />
    <main className={styles.main}>
    </main>
    <div className={styles.container0}>
      <HomeItem/>
      <HomeItem/>
      <HomeItem/>
    </div>
    <div className={styles.container1}>
      <HomeItem/>
      <HomeItem/>
      <HomeItem/>
    </div>
    </Fragment>
  )
}
