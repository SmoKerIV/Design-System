import ModalLayout from "./ModalLayout";
import SuccessSVG from './assets/SuccessSVG';

const Success = ({ title, content }) => {
    return <ModalLayout icon={<SuccessSVG />} title={title} content={content} open={true} />
}

export default Success