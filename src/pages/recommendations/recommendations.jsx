import styles from "./recommendations.module.css"
import React, { Fragment } from 'react'
import Button from "../../UI/Button/button";
import { useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import MobileNav from "../../components/MobileNav/MobileNav";
import DropDownMenu from "../../components/DropDownMenu/dropDownMenu";

const Recommendations = () => {
  const tempList = [{text: "Anime"}, {text: "Games"}, {text: "Manga"}]
  const [GenreTitle, setGenreTitle] = useState('')
  const [isClicked, setisClicked] = useState(false)
  const [isPressed, setIsPressed] = useState(false);

  const books = [{
    image: "https://m.media-amazon.com/images/I/41sddw5pkiL.jpg", 
    text: "Fairy Tail", 
    Description: "ashfbsajkfbaskjfas", 
    Author: "By Angel W", 
    Price: "£15.00"},
    {
      image: "https://m.media-amazon.com/images/I/41sddw5pkiL.jpg", 
      text: "Fairyl", 
      Description: "ashfbsajkfbaskjfas", 
      Author: "By Angel W", 
      Price: "£15.00"},
      {
        image: "https://m.media-amazon.com/images/I/41sddw5pkiL.jpg", 
        text: "Fry Tail", 
        Description: "ashfbsajkfbaskjfas", 
        Author: "By Angel W", 
        Price: "£15.00"},]


  const SelectedGenre = (title) => {
    setGenreTitle(title);
    setisClicked(true);
  }

return (
    <div className={styles.Page}>
      <NavBar isPressed={isPressed} onChangePressed={setIsPressed}/>
      <DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed}/>
      <MobileNav/>
      {!isClicked?
      <div className={styles.Container}>
          {tempList.map((Genre) => 
            <Button key={Genre.text} text={Genre.text} paddingToLeft="25vh" paddingToRight="25vh" click={() => SelectedGenre(Genre.text)}/>
          )}
      </div>
      : 
      <Fragment>
        <div className={styles.topMenu}>
        <h2 className={styles.title} onClick={() => setisClicked(false)} style={{cursor: "pointer"}}>←</h2>
        <h2 className={styles.title}>{GenreTitle}</h2></div>
      <div className={styles.ContainerMain}>
      {books.map((book) => 
      <div key={book.text} className={styles.Container} style={{backgroundColor: "white"}}>
          <div className={styles.rowContainer}>
          <img className={styles.photo} src={book.image} alt="book"></img>
          <div className={styles.ColumnContainer}>
          <h2>{book.text}</h2>
          <h2>{book.Description}</h2>
          <h2>{book.Author}</h2>
          <h2>{book.Price}</h2>
          </div>
          </div>
       </div>
       )}
      </div>
      </Fragment>
      }  
      </div>
  )
}  

export default Recommendations;
       