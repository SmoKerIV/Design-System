import ModalLayout from "./ModalLayout"
import WarningSVG from './assets/ExaminationSVG'


const Delete = ({ title, content, open, className }) => {
    return <ModalLayout title={title} deleteFlag={true} icon={<WarningSVG color="#FFC53D" />} className={className} content={content} open={open} />
}

export default Delete