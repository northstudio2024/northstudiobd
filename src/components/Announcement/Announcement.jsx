import './Announcement.css';
import PropTypes from 'prop-types'

const Announcement = ({announcement}) => {
    return (
        <div className="scrolling-text-container">
            <p className="scrolling-text">{announcement}</p>
        </div>
    );
};

Announcement.propTypes ={
    announcement: PropTypes.string
}

export default Announcement;