import React from 'react'

function Title(props) {
    let { title, primaryBg } = props;
    return (
        <h1 className='fs-600 mb-3'><span className={ primaryBg ? 'title-underline-primary relative' : 'relative title-underline'}>{title}</span></h1>
    )
}

export default Title