interface CategoryProps{
    params:{
        categories: string[],
        searhPrams: string
    }
}
export default function Category(props: CategoryProps){
console.log(props)
    const { categories }=props.params 

console.log(categories) 
return(
        <h1>Categoria Dinamica: {categories}</h1>
    )
}