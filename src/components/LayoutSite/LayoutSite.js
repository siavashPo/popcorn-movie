import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function LayoutSite({children}) {
    return (
        <div style={{backgroundColor:'#222'}}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default LayoutSite