import { Fragment, useState } from 'react';
import styles from './about.module.css';
import Angel from '../../assets/img/TeamMembers/angel.jpg';
import Katherine from '../../assets/img/TeamMembers/katherine.png';
import haiying from '../../assets/img/TeamMembers/haiying.jpg';
import Katalin from '../../assets/img/TeamMembers/katalin.png';
import Abbie from '../../assets/img/TeamMembers/abbie.jpg';
import TeamMemeber from '../../components/TeamMember/teamMember';
import NavBar from '../../components/NavBar/navbar';
import DropDownMenu from '../../components/DropDownMenu/dropDownMenu';
import MobileNav from '../../components/MobileNav/MobileNav';
import Charities from '../../components/Charities/Charities';

export default function About() {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<Fragment>
			<NavBar isPressed={isPressed} onChangePressed={setIsPressed} />
			<MobileNav/>
			<DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed} />
			<main className='main'>
				<section className={styles.content}>
					<p className='mainText'>About</p>
					<div className={styles.about}>
						<TeamMemeber
							name='Angel'
							profilepictrue={Angel}
							hobby='Coding websites in my spare time.'
							description='To get a job and have a good life'
						/>

						<TeamMemeber
							name='Katalin'
							profilepictrue={Katalin}
							hobby='Weight lifting and gaming.'
							description='To be strong and have a quick trigger finger.'
						/>

						<TeamMemeber
							name='Abbie'
							profilepictrue={Abbie}
							hobby='Reading'
							description='For mental stimulation and relaxation'
						/>

						<TeamMemeber
							name='Katherine Hooper'
							profilepictrue={Katherine}
							hobby='I enjoy running and kickboxing'
							description='Running feels freeing and helps me think. Kickboxing makes me feel connected and in control. I love to challenge myself and work hard to progress and improve.'
						/>

						<TeamMemeber
							name='Haiying Liao'
							profilepictrue={haiying}
							hobby='I like to keep learning new stuff'
							description='because I enjoy leaning :)'
						/>
					</div>
					<Charities/>
				</section>
			</main>
		</Fragment>
	);
}
