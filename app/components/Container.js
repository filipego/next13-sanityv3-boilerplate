function Container({ children, classes, smaller, noPadding }) {
    return (
        <div className={`container ${classes ? `${classes}` : ''} ${smaller ? 'container--smaller' : ''} ${noPadding ? 'p-tb-0' : ''}`}>
            {children}
        </div>
    )
}

export default Container