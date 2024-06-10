import style from './layout.module.css';


const Space = ({ children, align, size, direction, wrap }) => {
    return (
        <div className={style.space} style={{ alignItems: align || 'flex-start', flexDirection: direction || 'row', flexWrap: wrap || 'nowrap', gap: size || '0' }}>
            {children}
        </div>
    )
}

export default Space