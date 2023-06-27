const Portfolio = () => {
    return (
        <>
            <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1>
                        <a href="#">
                            <img src="img/google.png" />
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
            <div id="slide" className="bg-light"></div>
            <div id="about" className="bg-warning">
                <div className="container">
                    <div>
                        <a href="#">
                            <img src="" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="review" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-4 bg-body-secondary">1</div>
                        <div className="col-4 bg-dark-subtle">2</div>
                        <div className="col-4 bg-dark">3</div>
                    </div>
                </div>
            </div>
            <div id="contact" className="bg-light">
                <div className="container">
                    <div className="pt-3">
                        <form action="">
                            성 :{" "}
                            <input type="text" name="first_name" className />
                            <br />
                            이름 : <input type="text" name="last_name" />
                            <br />
                            번호 : <input type="text" name="phone" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
