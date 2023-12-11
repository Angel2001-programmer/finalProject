import styles from "./userInput.module.css"

const UserInput = props => {
    let closeModal = null
    if(props.title !== ""){
        closeModal= 
            <div className= {styles.rowTop}>
            <h2 className={styles.closeModal} onClick={props.isClose}>{props.isCloseIcon}</h2>
            <h2 className={styles.title}>{props.title}</h2>
            </div>
    } else {
        closeModal = 
            <div className= {styles.rowTop}>
            <h2 className={styles.title}>{props.title}</h2>
            </div>
    }
    return(
        <div>
            {closeModal}
            <label className={styles.userLabel} 
            htmlFor={props.for}
            >{props.labelName}</label>
            
            <input className={styles.userField} 
            type={props.type} 
            name={props.for} 
            value={props.value} 
            placeholder={props.placeholder}/>
        </div>
    )
}

export default UserInput;