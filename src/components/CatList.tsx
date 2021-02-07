import axios from 'axios';
import {useState, useEffect} from 'react';
import {Cat} from '../models/Cat';
import CatComponent from './Cat';

const CatList = () =>{

    const [cats, setCats] = useState<Cat[]>([]);
    
    useEffect(()=>{
        randomize();
    },[])

    const randomize = ()=>{
        axios.get<Cat[]>("https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc")
            .then((res)=>{
                const _cats = res.data;
                setCats(_cats);
            })
    }

    // console.log(typeof kitties)
    // console.log(kitties);
    // console.log(typeof cats)
    // console.log(cats.length)
    // console.log(videos)
    return (
        <div>
            <h1 className="subheader">Random Cats</h1>
            <div>
                <button onClick={randomize} className="random-button">Random</button>
            </div>
            <div className="cat-container">
                {
                    cats.map((c)=> <CatComponent key={c.id} id={c.id} url={c.url}/>)
                /* {
                video.map((video)=>(
                    <VideoComponent id={video.videoId}
                                title={video.title}
                                channel={video.channelTitle}
                                tnurl={video.tnUrl}
                                tnheight={video.tnHeight}
                                tnwidth ={video.tnWidth}
                    />
                    ))
                } */
                
                }
            </div>
        </div>)
    
            
        
}

export default CatList;