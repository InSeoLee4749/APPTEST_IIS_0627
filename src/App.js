// import "./scss/iis.scss";
const App = () => {
    const mytext = "내가 이집의 주인장";
    return <div className="App">{mytext}이랍니다.</div>;
};
const App2 = () => {
    const 오늘은평가날 = 627;
    return (
        <div className="App">
            <h1>리액트훈련</h1>
            {오늘은평가날 == 627 && <div>오늘은 평가날입니다.</div>}
        </div>
    );
};
export { App, App2 };
