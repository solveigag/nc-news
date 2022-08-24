import { useState } from "react"

const ExpandableComments = ({children, comment_count}) => {
    const [showComments, setShowComments] = useState(false);

    const toggleShowComments = () => {
        setShowComments((currShowComments) => {
            return !currShowComments;
        });
    };

    return <div>
        <button onClick={toggleShowComments}>{showComments ? 'Hide Comments' : `Show ${comment_count} Comments`}</button>
        {showComments ? children : null}
    </div>
}

export default ExpandableComments