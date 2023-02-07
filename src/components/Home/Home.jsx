import React,{useEffect , useState} from 'react'
import "./Home.css"
import axios from 'axios'




function Home (){


 const [data, setData] = useState([])
 


    const Api = 'https://picsum.photos/v2/list?page=2&limit=100'





   function renderDate  () {
        axios.get(Api)
        .then((res) => {
            
            setData(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        renderDate()
    }, [])






    return (
        <>
        <div className="Home">
        <div className="container">
            <div className="row">
                
                    {
                        data.map((item) => {
                            return (
                                <div className="col-3 p-2">
                                <div className="card" key={item.id}>
                                    <img src={item.download_url} className=" styles " alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.author}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href={item.download_url} className="btn btn-primary">Download</a>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
            
            </div>
        </div>
    </div>
        </>
    )
}

export default Home