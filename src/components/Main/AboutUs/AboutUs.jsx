import livingRoomImage from '../../../assets/img/interior-gery-living-room.jpg';
import FancyHeadingParagraph from '../../FancyHeadingParagraph/FancyHeadingParagraph';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-12">
            <FancyHeadingParagraph buttonVisibility = 'hidden' headingPosition='center' subHeadingPosition = 'center' paragraphPosition='center' heading='Who We Are' subHeading='North Studio Ltd.' paragraphVisibility='hidden'></FancyHeadingParagraph>
            <div className="flex gap-12 items-center my-12">
                <img className=" flex-1 rounded-xl" src={livingRoomImage} />
                <div className="flex-1">
                    <FancyHeadingParagraph headingVisibility='hidden' subHeadingVisibility='hidden' paragraph='North Studio Ltd, an Architectural consultancy based in Dhaka since 2015, offers a comprehensive range of services including Architectural Design with 3D Modeling and Animation services. We also provide Structural Design, Electrical Design, Plumbing and sanitary Design, Graphic Design, Supervision, Cost Estimation, Survey, Land Planning and plotting, Renovation Work, and Soil Testing. The firm is situated at Niketon, Gulshan, Dhaka.' buttonText='Learn More' buttonPosition='left'></FancyHeadingParagraph>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;