import style from "./pureModal.module.css";


export const PureModal = ({ isOpen = false, onClose = () => { }, children }) => {

    if (!isOpen) return;

    return <div className={style.pureModal}>
        <div className={style.backdrop} onClick={onClose}></div>
        <div className={style.contnet}>
            {children}
        </div>
    </div>
}