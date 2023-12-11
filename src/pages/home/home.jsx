import { Fragment, useState } from 'react'
import NavBar from '../../components/NavBar/navbar';
import styles from "./home.module.css";
import HomeItem from "../../components/HomeItem/HomeItem";
import Community from "../../assets/images/community.png"
import Gaming from "../../assets/images/gaming.png"
import Books from "../../assets/images/books.png"
import Friendship from "../../assets/images/friendship.png"
import TreatOthers from "../../assets/images/treatothers.png"
import News from "../../assets/images/discussions.png"
import dropArrow from "../../assets/images/drop_Icon.svg"
import Login from "../../UI/Login/login";

export default function Home() {  
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Fragment>
    <NavBar isPressed={isPressed} onChangePressed={setIsPressed}/>
    <main className={styles.main}>
      <div className={styles.rowHome}>
      <div className={styles.containerHeading}>
      <h1 className={styles.textHeading}>Find your community</h1>
      </div>
      <img className={styles.dropArrow} src={dropArrow} alt='Scroll down for more information'/>
      </div>
    </main>
    <div className={styles.container0}>
    <HomeItem text="A friendly place for introverts and everyone to express themseleves in safe a good environment" image={Community}/>
      <HomeItem text="A place for gamers of all kinds ranging from PC, Xbox, Playstation and much more!" image={Gaming}/>
      <HomeItem text="A place for book readers, to discuss there most loved pages." image={Books}/>
    </div>
    <div className={styles.container1}>
      <HomeItem text="This is a place where you can find guidance and support if you are having a tough time," image={Friendship}/>
      <HomeItem text="All we ask is you treat users on this website with respect and how you wish to be treated!" image={TreatOthers}/>
      <HomeItem text="We have plenty of anime discussion and news. you won’t want to miss this!" image={News}/>
    </div>
    </Fragment>
  )
}
