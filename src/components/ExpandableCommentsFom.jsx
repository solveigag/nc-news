const ExpandableCommentsForm = ({children, loggedInUser}) => {
    return <div>{loggedInUser.username ? children : null}</div>
}

export default ExpandableCommentsForm;