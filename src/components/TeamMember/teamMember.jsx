import { Fragment } from "react";
import styles from './teamMember.module.css';

const TeamMemeber = props => {
    return(
        <Fragment>
        <section className={styles.profile}>
          {props.profilepictrue !== "" && <img className={styles.profileIMG} src={props.profilepictrue} alt={props.name}/>}
          <h2>{props.name}</h2>
          <h4 className={styles.favouriteActivity}>Favourite hobby</h4>
            <li>{props.hobby}</li>
            <h4>Why do I do it?</h4>
            <li>{props.purpose}</li>
      </section>
        </Fragment>
    )
}
export default TeamMemeber;