import ModalLayout from "./ModalLayout"
import WarningSVG from './assets/ExaminationSVG'

const Warning = ({ title, content, className, open }) => {
    return <ModalLayout title={title} icon={<WarningSVG color="#FFC53D" />} className={className} open={open} content={content} />
}

export default Warning