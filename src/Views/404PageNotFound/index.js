import { useHistory } from 'react-router-dom';
import './style.css';

function PageNotFound() {
    const navigate = useHistory();
    const backToHome = () => {
        navigate.push("/");
    }
    return (
        <div className="fullScreen">
            <div className="container">
                <div className="pageNotFoundBox mx-auto text-center shadow">
                    <div className='text404'>
                        <h1 className="_404">404</h1>
                        <h3 className="pnfText">Page Not Found</h3>
                    </div>
                    <div className="btnHome">
                        <button className="btn btn-outline-primary rounded-pill px-3 py-2" onClick={backToHome}>Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
