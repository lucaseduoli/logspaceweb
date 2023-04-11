import AboutUs from "../../components/aboutUs";
import CaseStudies from "../../components/caseStudies";
import Footer from "../../components/footer";
import HeaderComponent from "../../components/header";

export default function CaseStudiesPage(){
    return (
        <div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<CaseStudies />
			<Footer />
		</div>
    )
}