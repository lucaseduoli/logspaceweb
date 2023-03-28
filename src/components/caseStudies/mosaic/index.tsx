export default function Mosaic({image}:{image:string}){
    return(
        <div className="h-full p-4 bg-cinder shadow-thick rounded-2xl">
			<img src={image} aria-label="Tweet"/>
		</div>
    )
}