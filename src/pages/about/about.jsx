import { Fragment } from 'react'
import MenuItems from '../../components/MenuItems/menuItems';
import styles from "./about.module.css";
import Angel from "../../assets/img/TeamMembers/angel.jpg";
import Katherine from "../../assets/img/TeamMembers/katherine.png"
import haiying from '../../assets/img/TeamMembers/haiying.jpg';
import Katalin from '../../assets/img/TeamMembers/katalin.png';
import TeamMemeber from '../../components/TeamMember/teamMember';
import NavBar from "../../components/NavBar/navbar";

export default function About() {
	return (
		<Fragment>
			<NavBar/>
			<main className='main'>
				<section className={styles.content}>
					<p className='mainText'>About</p>
					<h3>Team Introductiom</h3>
				<div className={styles.about}>
          <TeamMemeber
            name='Angel'
            profilepictrue={Angel}
            hobby='Coding websites in my spare time.'
            purpose='To get a job and have a good life'
          />

          <TeamMemeber 
          name='Katalin' 
          profilepictrue={Katalin} 
          hobby='Weight lifting and gaming.' 
          purpose='To be strong and have a quick trigger finger.'
      />
      
          <TeamMemeber 
          name='Abbie' 
          profilepictrue='' 
          hobby='Reading' 
          purpose='For mental stimulation and relaxation'
          />

          <TeamMemeber 
          name='Katherine Hooper' 
          profilepictrue={Katherine} 
          hobby='I enjoy running and kickboxing' 
          purpose='Running feels freeing and helps me think. Kickboxing makes me feel connected and in control. I love to challenge myself and work hard to progress and improve.'
          />
          
          <TeamMemeber
          name='Haiying Liao'
          profilepictrue={haiying}
          hobby='I like to keep learning new stuff'
          purpose='because I enjoy leaning :)' />  
        </div>
      </section>
    </main>
    </Fragment>
  )
}
