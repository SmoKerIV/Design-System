import style from './layout.module.css'

const Col = ({ span, children }) => {
    return (
        <div className={style.col} style={{ gridColumn: `auto / span ${span || 24}` }}>
            {children}
        </div>
    )
}

export default Col