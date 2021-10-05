import Header from "../Header/Header";

function LayoutSite({children}) {
    return (
        <div style={{backgroundColor:'black'}}>
            <Header />
            {children}
        </div>
    )
}
export default LayoutSite