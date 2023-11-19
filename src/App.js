import Card from "./components/Card";
import Card2 from "./components/Card2";
import Title from "./components/Title"
import Price from "./components/Price";
import Stars from "./components/Mark";

const App = ()=>{
    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-6">
                    <div className="box">
                        <Card/>
                        <Card2/>
                    </div>
                </div>
                <div className="col-6 display">
                    <Title/>
                    <Price/>
                    <div className="stars">
                        <Stars/>
                        <Stars/>
                        <Stars/>
                        <Stars/>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default App;