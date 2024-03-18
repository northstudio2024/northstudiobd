import PropTypes from 'prop-types';
import { FaArrowCircleRight } from "react-icons/fa";

const ArrowButton = ({buttonText = 'Button Text', buttonPosition = 'center', buttonVisibility = ''}) => {
    // buttonText = 'Learn More';
    // buttonPosition = 'left';
    // buttonVisibility = '';
    return (
        <div>
            <div className={`text-${buttonPosition}`}>
                <button className={`btn btn-neutral my-6 ${buttonVisibility}`}>{buttonText} <FaArrowCircleRight /> </button>
            </div>
        </div>
    );
};

ArrowButton.propTypes = {
    buttonText: PropTypes.string,
    buttonPosition: PropTypes.string,
    buttonVisibility: PropTypes.string
};

export default ArrowButton;