import style from './layout.module.css'

export const Row = ({ gutter, children }) => {

    return (
        <div className={style.grid} style={{ rowGap: gutter[0], columnGap: gutter[1] }}>
            {children}
        </div>
    )
}

