import style from './layout.module.css'

const Col = ({ span, children, sm, md, lg }) => {

    return (
        <div className={`${style.col} ${style[`span-md-${md}`]} ${style[`span-sm-${sm}`]} ${style[`span-lg-${lg}`]}`} style={{ gridColumn: `auto / span ${span || 24}` }}>
            {children}
        </div>
    )
}

export default Col