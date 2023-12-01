import { Fragment } from 'react'
import MenuItems from '../../components/MenuItems/menuItems';
import styles from "./about.module.css";
import Angel from "../../img/angel.jpeg";
import Katherine from "../../img/katherine.png"
import haiying from '../../img/haiying.jpg';
import TeamMemeber from '../../components/TeamMember/teamMember';

export default function About() {
	return (
		<Fragment>
			<nav className='navbar'>
				<h1 className='headingTitles'>NAVBAR</h1>
			</nav>
			<main className='main'>
				<aside className='sidebar'>
					<MenuItems />
				</aside>
				<section className={styles.content}>
					<p className='mainText'>About</p>
					<h3>Team Introductiom</h3>
					<div className={styles.aboutColumn}>
						<TeamMemeber
							name='Angel'
							profilepictrue={Angel}
							hobby='Coding websites in my spare time.'
							purpose='To get a job and have a good life'
						/>

						<TeamMemeber
							name='Your Name'
							// if you want your image on the website place it into the img folder,
							// and link it same as me with import on the top of the file.
							profilepictrue=''
							hobby='Your hobby/activity'
							purpose='Why do you do it?'
						/>

      <TeamMemeber 
      name='Abbie' 
      // if you want your image on the website place it into the img folder, 
      // and link it same as me with import on the top of the file.
      profilepictrue='' 
      hobby='Reading' 
      purpose='For mental stimulation and relaxation'
      />

      <TeamMemeber 
      name='Katherine Hooper' 
      // if you want your image on the website place it into the img folder, 
      // and link it same as me with import on the top of the file.
      profilepictrue={Katherine} 
      hobby='I enjoy running and kickboxing' 
      purpose='Running feels freeing and helps me think. Kickboxing makes me feel connected and in control. I love to challenge myself and work hard to progress and improve.'
      />
      <TeamMemeber 

      name='Your Name' 
      // if you want your image on the website place it into the img folder, 
      // and link it same as me with import on the top of the file.
      profilepictrue='' 
      hobby='Your hobby/activity' 
      purpose='Why do you do it?'
      />
        
      
			<TeamMemeber
			name='Haiying Liao'
			profilepictrue={haiying}
			hobby='I like to keep learning new stuff'
			purpose='because I enjoy leaning :)' />  
      </div>
      </section>
    </main>
    <footer className="footer"><p>(Group 1 Name) all rights reserved</p></footer>
    </Fragment>
  )
}
