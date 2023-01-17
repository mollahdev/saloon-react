import { BootWrapper } from "components/boot-loader/elements";
import whiteLogo from 'images/white-big-logo.png';

const BootLoader: React.FC = () => {
    return (
        <BootWrapper>
            <div>
                <img width="270" src={whiteLogo} alt="white-logo"/>
                <p>Loading...</p>
            </div>
        </BootWrapper>
    )
}

export default BootLoader;