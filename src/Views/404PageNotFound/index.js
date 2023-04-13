import './style.css';

function PageNotFound() {
    return (
        <div className="fullScreen">
            <div className="container">
                <div className="pageNotFoundBox mx-auto text-center shadow">
                    <div className='text404'>
                        <h1 className="_404">404</h1>
                        <h3 className="pnfText">Page Not Found...</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
