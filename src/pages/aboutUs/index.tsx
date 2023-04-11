import AboutUs from "../../components/aboutUs";
import Footer from "../../components/footer";
import HeaderComponent from "../../components/header";

export default function AboutUsPage(){
    return (
        <div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<AboutUs />
			<Footer />
		</div>
    )
}