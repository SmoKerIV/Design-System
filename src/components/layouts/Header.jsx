import cssStyle from './layout.module.css';

const Header = ({ children, style, className }) => {
    return (
        <div className={`${cssStyle.header} ${className}`} style={style}>{children}</div>
    )
}

export default Header