import { Fragment, useState, React } from 'react';
import styles from './editAccount.module.css';
import NavBar from '../../components/NavBar/navbar';
import profile from '../../assets/images/logos/user.png';
import editProfile from '../../assets/images/editProfile.svg';
import messageIcon from '../../assets/images/message.svg';
import DropDownMenu from '../../components/DropDownMenu/dropDownMenu';

const EditAccount = (props) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<Fragment>
			<NavBar isPressed={isPressed} onChangePressed={setIsPressed} />
			<DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed} />
			<main className={styles.main}>
				<div className={styles.banner}>
					<h2>About Your Account</h2>
				</div>
				<div className={styles.profile}>
					<img className={styles.profilePicture} src={profile} alt='profile.' />
					<h4 className={styles.profileName}>USERNAME</h4>
				</div>

				<div className={styles.postsContainer}>
					<h2>Posts</h2>
					{[1, 2, 3].map((post) => (
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

				<div className={styles.formContainer}>
					<h2>About your account</h2>
					<form className={styles.EditAccountform}>
						<div className={styles.row}>
							<label>FirstName:</label>
							<input
								className={styles.editInput}
								type='text'
								name='text'
								placeholder='Angel'
								readOnly='readonly'
							/>
							<img
								className={styles.imageButton}
								src={editProfile}
								alt='edit Password.'
							></img>
						</div>
						<div className={styles.row}>
							<label>LastName:</label>
							<input
								className={styles.editInput}
								type='text'
								name='text'
								placeholder='sdgsgjkshjfkshjfkash'
								readOnly='readonly'
							/>
							<img
								className={styles.imageButton}
								src={editProfile}
								alt='edit Password.'
							></img>
						</div>
						<div className={styles.row}>
							<label>UserName:</label>
							<input
								className={styles.editInput}
								type='text'
								name='text'
								placeholder='BlaxeXD'
								readOnly='readonly'
							/>
							<img
								className={styles.imageButton}
								src={editProfile}
								alt='edit Password.'
							></img>
						</div>
						<div className={styles.row}>
							<label>Email:</label>
							<input
								className={styles.editInput}
								type='email'
								name='text'
								placeholder='angelhhhhh3000@yahoo.com'
								readOnly='readonly'
							/>
							<img
								className={styles.imageButton}
								src={editProfile}
								alt='edit Password.'
							></img>
						</div>
						<div className={styles.row}>
							<label>Password:</label>
							<input
								className={styles.editInput}
								type='password'
								name='password'
								placeholder='currentPassword'
								readOnly='readonly'
							/>
							<img
								className={styles.imageButton}
								src={editProfile}
								alt='edit Password.'
							></img>
						</div>
					</form>
				</div>
			</main>
		</Fragment>
	);
};

export default EditAccount;
