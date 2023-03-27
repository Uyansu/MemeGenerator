import { useState, useEffect,useRef } from "react"




export default function MemeGenerator() {
    const [memes,setMemes] = useState(null);
    
    const url = `https://api.imgflip.com/get_memes`;

    const fetchData = async () => {
        try{
            const getMemes = await fetch(url);
            if(!getMemes) throw new Error(`Request failes with a status of ${getMemes.status}`);
            const parseData = await getMemes.json();
            setMemes(parseData);
        } catch (error) {
            console.log(error.message);
        }
    } 

    useEffect(()=>{
        fetchData();
    }, [])


    
    
    console.log(memes);
    return (
        <>
        {
            memes &&
            <>
                <div className="carousel w-full ">
                    {memes.data.memes.map((meme) => {
                        return(
                                <div key={meme.id} id={meme.id} className="carousel-item w-full">
                                        <img src={meme.url} className="" width={meme.width} height={meme.height}/>
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={"a"} className="btn btn-circle">❮</a> 
                                            <a href={"b"} className="btn btn-circle">❯</a>
                                        </div>
                                </div> 
                            
                        )
                    })}
                </div>
            </>
        }
        </>
    )

};
