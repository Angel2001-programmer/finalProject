import { Fragment, useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/navbar';
import styles from "./forum.module.css";
import Card from "../../UI/Card/card"
import ForumItem from "../../components/ForumItem/ForumItem";
import introduce from "../../assets/images/logos/introduce.png"
import anime from "../../assets/images/logos/anime.png"
import gaming from "../../assets/images/logos/joystick.png"
import books from "../../assets/images/logos/books_3771417.png"
import manga from "../../assets/images/logos/manga.png"
import Button from "../../UI/Button/button";
import { Link } from 'react-router-dom';
import DropDownMenu from "../../components/DropDownMenu/dropDownMenu";
import MobileNav from '../../components/MobileNav/MobileNav';
import axios from 'axios';

export default function Forum() {  
    const [isClicked, setIsClicked] = useState(false);
    const [postContent, setPostContent] = useState("");
    const [isPost, setIsPost] = useState(false);
    const [title, setTitle] = useState("");
    const [isPressed, setIsPressed] = useState(false);
    const [posts, setPosts] = useState(null);

    const list = [
      {icon: introduce, title: "Introduce Yourself"},
      {icon: anime, title: "Anime"},
      {icon: gaming, title: "Gaming"},
      {icon: books, title: "Books"},
      {icon: manga, title: "Manga"}
    ]

    const forumHandler = (category) => {
      setTitle(category.title)
      setIsClicked(true)
    }

  const createPost = () => {
      setIsPost(true);
  }

  const postHandler = (e) => {
    setPostContent(e.target.value);
  }

	useEffect(() => {
    try{
      const getForms = async () => {
        const res = await axios('http://localhost:5000/forum');
        console.log(res.data);
      }
      getForms();
    } catch(e) {
      console.log(e + ' Couldnt get api.')
    }
		
	},[])

  return (
    <Fragment>
    {isPost? <div id='modalBG'>
    <Card 
      UIcolor="#D9D9D9" 
      borderRadius="10px">
      <div className={styles.container}>
      <h3 className={styles.title}>Create Post</h3>
      <h3 className={styles.title}>{title}</h3>
      <textarea 
      className={styles.post} 
      type="text" 
      placeholder='Post content goes here....' 
      name='postContent' 
      value={postContent}
      onChange={(e) => postHandler(e)}/>
      <div className={styles.buttonContainer}>
      <Button 
      UIcolor="linear-gradient(#D000AF, #9000A8)"
      paddingToLeft="60px"
      paddingToRight="60px"
      borderColor="purple"
      dropShadow="5px 5px 5px #D000AF80"
      text="Submit Post"
      click={() => setIsPost(false)}/>
      </div>
      </div>
    </Card>
    </div> : null}
    <NavBar isPressed={isPressed} onChangePressed={setIsPressed}/>
    <MobileNav/>
    <Link className='link' to="/finalProject">
    <DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed}/>
    </Link>
    <main className={styles.main}>
    {!isClicked? <div className={styles.column}>
        <Card 
        UIcolor="#D9D9D9" 
        borderRadius="10px">
          <h2>Forums</h2>  
        </Card>
        <Card UIcolor="#D9D9D9" 
        borderRadius="10px">
          <div className={styles.column}>
          {list.map((category =>
            <ForumItem 
            key={category.title}
            icon={category.icon} 
            title={category.title} 
            click={() => forumHandler(category)}
            />
          ))}
          </div>
        </Card>
        </div> :
        <div className={styles.column}>
        <Card UIcolor="#D9D9D9" 
        borderRadius="10px">
        <div className={styles.row}>
          <h2 onClick={() => setIsClicked(false)}>←</h2>
          <h2>{title}</h2>  
          <h2 onClick={() => createPost()}>Create Post</h2>  
        </div>
      </Card>
      <Card UIcolor="#D9D9D9" 
      borderRadius="10px">
        <div className={styles.column}>
        {posts !== null?

        posts.map((category) =>
          <ForumItem 
          key={category.title}
          icon={category.icon} 
          title={category.title} 
          userName="Posted By User"
          click={() => forumHandler(category)}
        />
        )
:
				<div className={styles.NoPosts}>
				<h2>No Posts Yet.</h2>
				</div>
				}
        </div> 
      </Card>
       </div>
      } 
    </main>
    </Fragment>
  )
}


