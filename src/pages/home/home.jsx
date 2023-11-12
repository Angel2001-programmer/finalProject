import { Fragment } from 'react'
import MenuItems from '../../components/MenuItems/menuItems';
export default function Home() {  
  return (
    <Fragment>
    <nav className='navbar'><h1 href="/" className='headingTitles'>NAVBAR</h1></nav>
    <main className='main'>
      <aside className='sidebar'>
        <MenuItems />
      </aside>
      <section className='content'>
      <p className='mainText'>Home</p>
      </section>
    </main>
    <footer className='footer'><p>(Group 1 Name) all rights reserved</p></footer>
    </Fragment>
  )
}
