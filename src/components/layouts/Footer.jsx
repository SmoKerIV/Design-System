import cssStyle from './layout.module.css'

const Footer = ({ children, style, className }) => {
    return (
        <div className={`${cssStyle.footer} ${className}`} style={style}>{children}</div>
    )
}

export default Footer