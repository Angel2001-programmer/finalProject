import { Fragment, useState, React } from 'react';
import styles from './editAccount.module.css';
import NavBar from '../../components/NavBar/navbar';
import DropDownMenu from '../../components/DropDownMenu/dropDownMenu';
import MobileNav from '../../components/MobileNav/MobileNav';
import EditPosts from "../../components/EditPosts/EditPosts";
import EditBanner from "../../components/EditBanner/EditBanner";
import EditDetailsProfile from "../../components/EditProfileDetails/EditProfileDetails";

const EditAccount = () => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<Fragment>
			<NavBar isPressed={isPressed} onChangePressed={setIsPressed} />
			<MobileNav/>
			<DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed} />
			<main className={styles.main}>
				<EditBanner/>
				<EditPosts/>
				<EditDetailsProfile/>
			</main>
		</Fragment>
	);
};

export default EditAccount;
