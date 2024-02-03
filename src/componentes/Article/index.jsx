import Post from '../Post'

const Article = () =>{
    return(
        <div className='container-post'>
            <Post subtitle="Tecnologia" title="O guia definitivo sobre blog">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, fuga. Animi, tenetur. Quia soluta, distinctio recusandae non expedita qui blanditiis modi officiis incidunt repudiandae corrupti  
            </Post>
            <Post subtitle="Fotografia" title="Quais são as melhores cameras de 2024">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, fuga. Animi, tenetur. Quia soluta, distinctio recusandae non expedita qui blanditiis modi officiis incidunt repudiandae corrupti 
            </Post>
            <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, fuga. Animi, tenetur. Quia soluta, distinctio recusandae non expedita qui blanditiis modi officiis incidunt repudiandae corrupti 
            </Post>
            
        </div>
    )
}

export default Article;