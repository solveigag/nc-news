const ExpandCommentsForm = ({children, loggedInUser}) => {
    return <div>{loggedInUser.username ? children : null}</div>
}

export default ExpandCommentsForm;