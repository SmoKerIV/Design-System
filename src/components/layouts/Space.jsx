import spaceStyle from './layout.module.css';


const Space = ({ children, className, style, align, size, direction, wrap }) => {

    const allStyle = {
        alignItems: align || 'flex-start',
        flexDirection: direction || 'row',
        flexWrap: wrap || 'nowrap',
        gap: size || '0',
        ...style
    }


    return (
        <div className={`${spaceStyle.space} ${className}`} style={allStyle}>
            {children}
        </div>
    )
}

export default Space