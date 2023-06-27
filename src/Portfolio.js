const Portfolio = () => {
    return (
        <>
            <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1>
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                    </h1>
                    <ul id="gnb" className="d-flex">
                        <li>
                            <a href="#about" className="p-3">
                                나의소개
                            </a>
                        </li>
                        <li>
                            <a href="#review" className="p-3">
                                나의작업
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="p-3">
                                나의 연락처
                            </a>
                        </li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li>
                            <a href="" className="p-3">
                                깃
                            </a>
                        </li>
                        <li>
                            <a href="">노션</a>
                        </li>
                    </ul>
                </div>
            </header>
            <div id="slide" className="vh-100 bg-light"></div>
            <div id="about" className="vh-100 bg-warning"></div>
            <div id="review" className="vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            <div id="contact" className="vh-100 bg-light"></div>
        </>
    );
};

export default Portfolio;
