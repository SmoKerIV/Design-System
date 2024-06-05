
const ExaminationSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <path
            fill={props.color || "#1890FF"}
            d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0Zm0 20.134A9.135 9.135 0 0 1 1.866 11 9.136 9.136 0 0 1 11 1.866 9.135 9.135 0 0 1 20.134 11 9.135 9.135 0 0 1 11 20.134Z"
        />
        <path
            fill={props.color || "#1890FF"}
            d="M9.821 15.321a1.179 1.179 0 1 0 2.357 0 1.179 1.179 0 0 0-2.357 0Zm.59-2.75h1.178a.197.197 0 0 0 .196-.196V5.696a.197.197 0 0 0-.196-.196H10.41a.197.197 0 0 0-.196.196v6.679c0 .108.088.196.196.196Z"
        />
    </svg>
)
export default ExaminationSVG
