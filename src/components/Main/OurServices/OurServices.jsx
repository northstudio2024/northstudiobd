import serviceArchi from '../../../assets/img/services-architecture.jpg';
import serviceInt from '../../../assets/img/services-interior.jpg';
import servicePlan from '../../../assets/img/services-planning.jpg';
import ArrowButton from "../../ArrowButton/ArrowButton";
import FancyHeadingParagraph from '../../FancyHeadingParagraph/FancyHeadingParagraph';

const OurServices = () => {
    return (
        <div className="container mx-auto my-12">
            <FancyHeadingParagraph subHeadingVisibility='hidden' paragraphVisibility='hidden' buttonVisibility='hidden' heading='Our Services' headingPosition='center'></FancyHeadingParagraph>
            <div className='flex gap-6 justify-center'>
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl border p-5">
                    <figure><img className='rounded-lg' src={serviceArchi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Architectural Planning
                            <div className="badge badge-secondary">REGULAR</div>
                        </h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Architecture</div>
                            <div className="badge badge-outline">Civil</div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow-xl border p-5">
                    <figure><img className='rounded-lg' src={serviceInt} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Interior & Exterior Design
                            <div className="badge badge-success">POPULAR</div>
                        </h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Architecture</div>
                            <div className="badge badge-outline">Civil</div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl border p-5">
                    <figure><img className='rounded-lg' src={servicePlan} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Walkthrough Animation
                            <div className="badge badge-secondary">REGULAR</div>
                        </h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Architecture</div>
                            <div className="badge badge-outline">Civil</div>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowButton buttonPosition='center' buttonText='Learn More'></ArrowButton>
        </div>
    );
};

export default OurServices;