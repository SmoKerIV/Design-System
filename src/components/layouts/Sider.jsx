import { useEffect, useState } from 'react';
import styleSider from './layout.module.css';

const Sider = ({ collapsible, collapsed, width, className, children }) => {
    const [siderStyle, setSiderStyle] = useState({});

    const handleStyle = () => {
        setSiderStyle({
            width: collapsed && collapsible ? '50%' : '0',
            transition: collapsible ? 'all 0.5s ease-in-out' : ''
        });
    };

    useEffect(() => {
        handleStyle();
    }, [collapsed, collapsible]);

    return (
        <div className={`${styleSider.sider} ${className}`} style={siderStyle}>
            {children}
        </div>
    );
}

export default Sider;
