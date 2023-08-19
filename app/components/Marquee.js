

function Marquee({ children, darkBG, reverse }) {
    return (
        <>
            <div className={darkBG ? 'marquee marquee--darkBG' : 'marquee'}>
                <h3 className="heading-3">
                    <div className={reverse ? 'marquee-wrapper marquee-wrapper--reverse' : 'marquee-wrapper'}>
                        <div className="marquee-title">
                            {children}
                        </div>
                    </div>
                </h3>
            </div>

        </>
    )
}

export default Marquee