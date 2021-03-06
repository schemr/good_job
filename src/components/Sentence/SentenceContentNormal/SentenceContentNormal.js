import React from 'react';
import classes from './SentenceContentNormal.scss';

const sentenceContent = (props) => (
    <div className={classes.Content}>
        <i className="fa fa-thumbs-up"></i>{props.content}
    </div>
);

export default sentenceContent;