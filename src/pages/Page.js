import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Movie from "../components/Movie/Movie";


function Page() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie/:id'  component={Movie}/>
        </Switch>
    )
}

export default Page