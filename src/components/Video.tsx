interface Video{
    id:string,
    title:string,
    channel:string,
    tnurl:string,
    tnheight:number,
    tnwidth:number
}

const VideoComponent:React.FC<Video> = ({id,title,channel,tnurl,tnheight,tnwidth})=>{
    return (
        <div id={id}>
            <h3>{title}</h3>
            <p>{channel}</p>
            <img height={tnheight} width={tnwidth} src={tnurl}/>
        </div>
    )
}


export default VideoComponent;