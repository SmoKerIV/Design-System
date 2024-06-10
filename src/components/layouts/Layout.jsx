import style from './layout.module.css'

const Layout = ({ children, hasSider }) => {

    let st = {}

    if (hasSider) {
        st = {
            display: 'flex',
        }
    }

    return (
        <div className={style.layout} style={st}>{children}</div>
    )
}

export default Layout