

const ExpndDeleteBtn = ({children, loggedInUser, author}) => {
    
    return <div>{loggedInUser.username === author ? children : null}</div> 
// {loggedInUser.username === author ? true ? children[0] : children[1] :null}
   
}

export default ExpndDeleteBtn;