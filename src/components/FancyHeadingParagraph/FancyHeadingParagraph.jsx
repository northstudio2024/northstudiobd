import PropTypes from 'prop-types'
import ArrowButton from '../ArrowButton/ArrowButton';

const FancyHeadingParagraph = ({heading = 'Heading Name', headingPosition = 'center', paragraph = 'write your paragraph here', headingVisibility = '', subHeading = 'Sub Heading Text', subHeadingVisibility = '', subHeadingPosition = 'center', paragraphPosition = '', paragraphVisibility = '', buttonVisibility = '', buttonPosition = 'center', buttonText = 'Button Text'}) => {
    
    return (
        <div>
            <div className="container mx-auto my-12">
                <h2 className={`text-5xl text-${headingPosition} font-black ${headingVisibility}`}>{heading}</h2>
                <h3 className={`text-3xl text-${subHeadingPosition} ${subHeadingVisibility}`}>{subHeading}</h3>
                <p className={`mt-6 text-${paragraphPosition} ${paragraphVisibility}`}>{paragraph}</p>
                <ArrowButton buttonText = {buttonText} buttonPosition ={buttonPosition} buttonVisibility = {buttonVisibility}></ArrowButton>
            </div>
        </div>
    );
};

FancyHeadingParagraph.propTypes = {
    heading: PropTypes.string,
    headingPosition: PropTypes.string,
    paragraph: PropTypes.string,
    headingVisibility: PropTypes.string,
    subHeading: PropTypes.string,
    subHeadingVisibility: PropTypes.string,
    subHeadingPosition: PropTypes.string,
    paragraphPosition: PropTypes.string,
    paragraphVisibility: PropTypes.string,
    buttonVisibility: PropTypes.string,
    buttonPosition: PropTypes.string,
    buttonText: PropTypes.string,
}

export default FancyHeadingParagraph;