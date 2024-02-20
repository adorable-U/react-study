import React from 'react';

const Posting = (props) => {
    return (
        <>
            <div className="post-preview"><a href="#">
                <h2 className="post-title">{props.title}</h2>
                <h3 className="post-subtitle">{props.subtitle}</h3>
            </a>
                <p className="post-meta">포스팅 날짜:&nbsp;<a href="#">{props.date}</a></p>
            </div>
        </>
    );
};

export default Posting;