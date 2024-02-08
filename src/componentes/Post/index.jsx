const Post = (props,children) =>{
    return(
        <div className="post ml-4 mt-4">  
            <div className="image-post"></div>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p>
               {props.children} 
            </p>
            <div className="box-info flex mt-2 ">
                <div className="img-profile ">
                </div>
                <div className="info ml-2">
                    <h5>{props.author}</h5>
                    <p>{props.date}</p>
                </div>
            </div>
    
        </div>
    )
}

export default Post;