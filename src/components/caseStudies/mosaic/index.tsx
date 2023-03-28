export default function Mosaic({image, delay}:{image:string, delay:number}){
    return(
        <div data-aos="zoom-in"
		data-aos-duration="1000" data-aos-delay={delay} className="h-full p-4 bg-cinder shadow-thick rounded-2xl">
			<img src={image} aria-label="Tweet"/>
		</div>
    )
}