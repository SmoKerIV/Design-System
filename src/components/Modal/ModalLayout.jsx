import './Modal.css';
import '../../syles/variable.css'
import ExaminationSVG from './assets/ExaminationSVG';
import CustomButton from './CustomButton';

const ModalLayout = ({ title, icon, deleteFlag, content, className, buttonTitle, zIndex, open }) => {
    return (
        <div className={`${className} modal-layout`} style={{ zIndex: zIndex, display: `${open ? "flex" : "none"}` }}>
            <div className='modal-layout-wrapping'>
                <div className='modal-layout-icon'>
                    {icon || <ExaminationSVG />}
                </div>
                <div className='modal-layout-title'>
                    <p>{title || "This is some info"}</p>
                    <p>{content || "Some contents..."}</p>
                </div>
            </div>
            {deleteFlag ?
                <div className='modal-delete-buttons'>
                    <CustomButton buttonTitle="No" className="modal-delete-no-button" />
                    <CustomButton buttonTitle="Yes" />
                </div>
                :
                <button className='modal-layout-button'>{buttonTitle || "Done"}</button>
            }
        </div>
    )
}

export default ModalLayout