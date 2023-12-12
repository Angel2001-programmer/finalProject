import { Fragment, useState } from 'react'
import NavBar from '../../components/NavBar/navbar';
import styles from "./forum.module.css";
import Card from "../../UI/Card/card"
import ForumItem from "../../components/ForumItem/ForumItem";
import tiger from "../../assets/images/tiger.png"
import anime from "../../assets/images/anime.png"
import gaming from "../../assets/images/joystick.png"
import books from "../../assets/images/books_3771417.png"
import manga from "../../assets/images/tiger.png"
import Button from "../../UI/Button/button";
import { Link } from 'react-router-dom';

export default function Forum() {  
    const [isClicked, setIsClicked] = useState(false);
    const [postContent, setPostContent] = useState("");
    const [isPost, setIsPost] = useState(false);
    const [title, setTitle] = useState("");
    const [isPressed, setIsPressed] = useState(false);
    const list = [
      {icon: tiger, title: "Introduce Yourself"},
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
    {isPressed?
    <div className="dropDownMenuContainer">
      <div className="dropDownMenu">
      <Link className='link' to="/editAccount"><p className='dropMenuItem'>EditAccount</p></Link>
      </div>
    </div>
    : null}
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
          <h2>{title}</h2>  
          <h2 onClick={() => createPost()}>Create Post</h2>  
        </div>
      </Card>
      <Card UIcolor="#D9D9D9" 
      borderRadius="10px">
        <div className={styles.column}>
        {list.map((category =>
          <ForumItem 
          key={category.title}
          icon={category.icon} 
          title={category.title} 
          userName="Posted By User"
          click={() => forumHandler(category)}
          />
        ))}
        </div>
      </Card>
      </div> 
      }
    </main>
    </Fragment>
  )
}


