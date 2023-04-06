import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import HeaderComponent from "../../components/header";

export default function ContactUsPage(){
    return (
        <div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<ContactUs />
			<Footer />
		</div>
    )
}