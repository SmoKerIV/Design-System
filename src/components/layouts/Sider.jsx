import { useEffect, useState } from 'react';
import styleSider from './layout.module.css';

const Sider = ({ collapsible, reverseArrow, width, className, children }) => {
    const [siderStyle, setSiderStyle] = useState({});
    const [flag, setFlag] = useState(false);

    const handleStyle = () => {
        setSiderStyle({
            width: flag && collapsible ? '50%' : '0',
            transition: collapsible ? 'all 0.5s ease-in-out' : '',
        });
    };

    useEffect(() => {
        handleStyle();
    }, [flag, collapsible]);

    return (
        <div className={`${styleSider.sider} ${className}`} style={siderStyle}>
            {children}

            {collapsible &&
                <div className={styleSider.closeArrow} onClick={() => setFlag(!flag)}>
                    <i className={`${styleSider.arrow} ${flag ? styleSider.left : styleSider.right}`}></i>
                </div>
            }
        </div>
    );
}

export default Sider;
