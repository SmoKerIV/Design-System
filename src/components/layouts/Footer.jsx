import style from './layout.module.css'

const Footer = ({ children }) => {
    return (
        <div className={style.footer}>{children}</div>
    )
}

export default Footer