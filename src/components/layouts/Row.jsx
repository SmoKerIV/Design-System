import rowStyle from './layout.module.css'

export const Row = ({ gutter, style, className, children }) => {

    const allStyle = {
        rowGap: gutter[0], columnGap: gutter[1],
        ...style
    }

    return (
        <div className={`${rowStyle.grid} ${className}`} style={allStyle}>
            {children}
        </div>
    )
}

