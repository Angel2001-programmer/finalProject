import { Fragment } from 'react'
import MenuItems from '../../components/MenuItems/menuItems';
import CardList from '../../components/CardList/CardList'
import styles from "../../pages/about/about.module.css";

export default function About() {
  let list = [
    {
    id: 0,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 1,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 2,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 3,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  },
  {
    id: 4,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 5,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 6,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  },
  {
    id: 7,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 9,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }, 
  {
    id: 10,
    image: "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg", 
    name: "Dummy", 
    description: "sjgkhdsjkghjkasghjalhgjlas"
  }
]
  return (
    <Fragment>
    <nav className="navbar"><h1 className="headingTitles">NAVBAR</h1></nav>
    <main className="main">
      <aside className="sidebar">
        <MenuItems/>
      </aside>
      <section className="content">
      <p className="mainText">About</p>
      <CardList data={list} className={styles.CardList}/>
      </section>
    </main>
    <footer className="footer"><p>(Group 1 Name) all rights reserved</p></footer>
    </Fragment>
  )
}