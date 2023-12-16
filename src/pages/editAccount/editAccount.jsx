import { Fragment, useState, React, useEffect } from 'react';
import styles from './editAccount.module.css';
import NavBar from '../../components/NavBar/navbar';
import DropDownMenu from '../../components/DropDownMenu/dropDownMenu';
import MobileNav from '../../components/MobileNav/MobileNav';
import EditPosts from "../../components/EditPosts/EditPosts";
import EditBanner from "../../components/EditBanner/EditBanner";
import EditDetailsProfile from "../../components/EditProfileDetails/EditProfileDetails";

const EditAccount = () => {
	const [isPressed, setIsPressed] = useState(false);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const getUserDetails = async () => {
			// const res = await axios.get('http://localhost:5000/);
		}
	},[])


	return (
		<Fragment>
			<NavBar isPressed={isPressed} onChangePressed={setIsPressed} />
			<MobileNav/>
			<DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed} />
			<main className={styles.main}>
				<EditBanner/>
				{posts !== null?
				<EditPosts/>
				:
				<div className={styles.NoPosts}>
				<h2>No Posts Yet.</h2>
				</div>
				}
				<EditDetailsProfile/>
			</main>
		</Fragment>
	);
};

export default EditAccount;
