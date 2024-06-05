

const CustomButton = ({ buttonTitle, className }) => {
    return <button className={className + ` modal-layout-button`}>{buttonTitle || "Done"}</button>
}

export default CustomButton;