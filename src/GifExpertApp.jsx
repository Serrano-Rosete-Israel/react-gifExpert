import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () =>{
 
    //uso de un hook 
    const [categories, setCategories] = useState(['']);
 
    const onAddCategory = (newCategory) =>{
      
        //validar que sean unicos los nombres
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //setCategories(['Valorant', ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory = {(event)=>onAddCategory(event)}
            />
            {
              categories.map( (category) => (
              <GifGrid 
              key={category} 
              category={category}/>        
              ))
            }
            </>
    )
}