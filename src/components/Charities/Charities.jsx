import styles from "./Charities.module.css";
import { charities } from '../../constants';
import TeamMemeber from "../TeamMember/teamMember";
import { Fragment } from "react";
// import image from "../../assets/images/logos/bipolar.png";

const Charities = () => {
    return(
        <div>
						<h2>Helplines</h2>
						<p className={styles.paragraph}>
							If you are struggling with loneliness or anything please contact
							the following charities dont ever feel like you cant reach out
							because there are people who will help you.
						</p>

						{charities.map((charity) => (
                            <Fragment>
                                <TeamMemeber 
                                //Haiying can you please have look why the images are not loading.
                                // I am not sure if there something wrong with our imports in the TeamMember Componenet.
                                // profilepictrue={charity.image}  
                                hobby="" description=""/>
								<h3>{charity.name}</h3>
								<p className={styles.paragraph}>{charity.desc}</p>
								<p className={styles.paragraph}>
									website: <a href={charity.website}>{charity.website}</a>
								</p>
                            </Fragment>
						))}
					</div>
    )
}

export default Charities;