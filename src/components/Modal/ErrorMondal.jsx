import ModalLayout from "./ModalLayout"
import ErrorSVG from './assets/DeleteSVG'

const ErrorMandal = ({ title, content, open, className }) => {
    return <ModalLayout title={title} icon={<ErrorSVG />} content={content} className={className} open={open} />
}

export default ErrorMandal