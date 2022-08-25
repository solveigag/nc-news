const ExpndDeleteBtn = ({children, loggedInUser, author}) => {
   console.log(children)
    return <div>{loggedInUser.username === author ? children : null}</div>
}

export default ExpndDeleteBtn;