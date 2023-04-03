import CaseStudies from "../../components/caseStudies";
import Collaborate from "../../components/collaborate";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import Head from "../../components/head";
import HeaderComponent from "../../components/header";
import Solutions from "../../components/solutions";

export default function MainPage(){
    return (
        <div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<Head />
			<Collaborate />
			<CaseStudies/>
			<Solutions />
			<ContactUs />
			<Footer />
		</div>
    )
}