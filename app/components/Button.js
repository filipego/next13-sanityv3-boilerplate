import Link from "next/link";

function Button({ children, ghost, smaller, url }) {
    return (
        <Link href={url} className={`btn ${smaller ? 'btn--smaller' : ''} ${ghost ? 'btn--ghost' : ''}`}>
            <div className="hover"></div>
            <span>{children}</span>
        </Link>
    )
}

export default Button