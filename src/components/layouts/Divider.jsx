import dividerStyle from './layout.module.css'

export const Divider = ({ orientation, orientationMargin, type, className, style, children }) => {
    let st = {}

    if (orientation === 'left') {
        st = {
            top: '50%',
            left: '0%',
            transform: 'transform: translate(0%, -50%)'
        }
    } else if (orientation === 'right') {
        st = {
            top: '50%',
            right: '0%',
            transform: 'translate(0%, -50%)'
        }
    } else {
        st = {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }


    return (
        <div className={`${dividerStyle.Divider} ${className}`} style={style}>
            <p className={dividerStyle.p} style={st}>
                {children}
            </p>
        </div>
    );
}

