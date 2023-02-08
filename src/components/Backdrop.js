import './Backdrop.css'

const Backdrop = (props) => {
    return(
        <div className={`Backdrop ${props.show ? 'BackdropOpen' : 'BackdropClosed'}`} onClick={props.onClick}></div>
    )
};

export default Backdrop;