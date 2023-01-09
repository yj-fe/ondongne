import * as L from 'components/commonUi/Layout';
import "../../pages/login/LocationSetting/LocationSetting.css";

const LoadingBar = () => {
    return (
        <L.FlexRows _content='center'>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </L.FlexRows>
    )
}

export default LoadingBar;