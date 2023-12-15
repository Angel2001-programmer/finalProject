import styles from "./EditPosts.module.css";
import messageIcon from '../../assets/images/message.svg';
import profile from '../../assets/images/logos/user.png';

const EditPosts = () => {
    return (
        <div className={styles.postsContainer}>
					<h2>Posts</h2>
					{[1].map((post) => (
						<div className={styles.post}>
							<div className={styles.postProfilecontainer}>
								<div className={styles.userPhotoContainer}>
									<img src={profile} alt='profile.' />
								</div>
								<div className={styles.userInfocontainer}>
									<h6>USERNAME</h6>
									<h6>Group 1</h6>
								</div>
							</div>

							<p className={styles.postContent}>
								Any got a Spare Iphone charger I can have until the weekend?
							</p>

							<div className={styles.postMessageContainer}>
								<img
									src={messageIcon}
									alt='messageIcon'
									width={20}
									height={20}
								/>
								<p>5</p>
							</div>
						</div>
					))}
				</div>
    )
}

export default EditPosts;
