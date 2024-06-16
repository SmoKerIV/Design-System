import contentStyle from './layout.module.css'

const Content = ({ className, style, children }) => {
    return (
        <div className={`${contentStyle.content} ${className}`} style={style}>{children}</div>
    )
}

export default Content