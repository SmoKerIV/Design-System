import colStyle from './layout.module.css'

const Col = ({ span, children, className, style, sm, md, lg }) => {

    const allStyle = {
        gridColumn: `auto / span ${span || 24}`,
        ...style
    }

    return (
        <div className={`${className} ${colStyle.col} ${colStyle[`span-md-${md}`]} ${colStyle[`span-sm-${sm}`]} ${colStyle[`span-lg-${lg}`]}`} style={allStyle}>
            {children}
        </div>
    )
}

export default Col