import { useState } from "react"

const ExpandableComments = ({children, comment_count}) => {
    const [showComments, setShowComments] = useState(false);

    const toggleShowComments = () => {
        setShowComments((currShowComments) => {
            return !currShowComments;
        });
    };

    return <div className="expand-comments-container">
        <button className="comments-button" onClick={toggleShowComments}><span>{showComments ? 'Hide Comments' : `Show ${comment_count} Comments`}</span></button>
        {showComments ? children : null}
    </div>
}

export default ExpandableComments