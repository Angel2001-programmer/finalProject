import { Fragment } from 'react'
import MenuItems from '../../components/MenuItems/menuItems';

export default function Contact() {
  return (
    <Fragment>
    <nav className="navbar"><h1 className="headingTitles">NAVBAR</h1></nav>
    <main className="main">
      <aside className="sidebar">
        <MenuItems/>
      </aside>
      <section className="content">
      <p className="mainText">Contact</p>
      </section>
    </main>
    <footer className="footer"><p>(Group 1 Name) all rights reserved</p></footer>
    </Fragment>
  )
}
