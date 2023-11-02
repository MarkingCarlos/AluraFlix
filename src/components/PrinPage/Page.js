import React,{ useState, useEffect } from "react";
import './Page.css'



function Page(){
    
    const videos = [
        { title: 'One Republic', url: 'https://www.youtube.com/embed/4Afc3DyirHM?autoplay=1', descricao: 'Couting Stars' },
        { title: 'Imagine Dragons', url: 'https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1', descricao: 'Beliver' },
        { title: 'One Republic', url: 'https://www.youtube.com/embed/Dm_BrGu1sHM?autoplay=1', descricao: 'Mirage' },
      ];
  
      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 60000); // 60000ms = 1 minuto
        return () => clearInterval(interval);
      }, [videos.length]);

 
    return(
        <div id="video-container">
          
                <div id="texto">
                    <h1 style={{color:'#04be4a'}}>{videos[currentVideoIndex].descricao}</h1>
                    <h2>{videos[currentVideoIndex].title} </h2>
                </div>
                
                <iframe  height="433" src={videos[currentVideoIndex].url}  frameBorder="0" allow="autoplay"allowFullScreen></iframe>
               
            
        </div>
    );
}

export default Page;