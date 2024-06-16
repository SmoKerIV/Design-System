import style from "./pureModal.module.css";


export const PureModal = ({ title, closeIcon = true, isOpen = false, onClose = () => { }, onOk = () => { }, children }) => {

    if (!isOpen) return;

    return <div className={style.pureModal}>
        <div className={style.backdrop} onClick={onClose}></div>
        <div className={style.contnet}>
            <div className={style.info}>
                <div className={style.closeIcon}>
                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{title || "Title here"}</p>
                    {closeIcon && <span className={style.close} onClick={onClose}></span>}
                </div>
                <div className={style.modal_content}>
                    {children}
                    <div style={{ width: '100%', display: "flex", justifyContent: 'flex-end', gap: '8px' }}>
                        <button className={style.close_button} onClick={onClose}>Cancel</button>
                        <button className={style.close_button} style={{ backgroundColor: "#1777FF", border: 'none', color: '#fff' }} onClick={() => {
                            onOk()
                            onClose()
                        }}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}