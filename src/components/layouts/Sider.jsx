const Sider = ({ collapsible, style = {}, width, className, children }) => {
    return (
        <div className={className} style={{ width: width || 'fit-content' }}>{children}</div >
    )
}

export default Sider