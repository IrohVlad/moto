import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Texts = ({defaultValues, dataArr, index}) => {
    const nodeRef = React.useRef(null);
    return (
        <TransitionGroup className='texts_wrapper'>
            <CSSTransition classNames='fade' timeout={0} key={index} nodeRef={nodeRef}>
                <div ref={nodeRef} className="texts">
                    <div className="title">
                        {index == 0 ? defaultValues.title : dataArr[index-1].title}
                    </div>
                    <div className="text">
                        {index == 0 ? defaultValues.text : dataArr[index-1].text}
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Texts;