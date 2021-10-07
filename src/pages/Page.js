import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Popular from "./Popular/Popular";

function Page() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/movie/popular' exact component={Popular} />
            <Route path='/movie/:id' exact component={Movie}/>
        </Switch>
    )
}

export default Page