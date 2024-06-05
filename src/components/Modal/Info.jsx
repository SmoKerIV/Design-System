import './Modal.css';
import ModalLayout from './ModalLayout';


const Info = ({ title, className, style, content }) => {
    return (
        <ModalLayout open={true} className={className} style={style} title={title} content={content} />
    )
}

export default Info