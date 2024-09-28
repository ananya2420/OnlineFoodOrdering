import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  
    return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>"Explore our menu and discover a variety of delicious dishes at your fingertips. Whether you're in the mood for a quick bite, a hearty meal, or something unique, our extensive selection has something for everyone. From local favorites to international cuisine, each item is carefully prepared with fresh ingredients and delivered straight to your door. Browse through categories, filter by preferences, and customize your order just the way you like it. With chef specials, seasonal offerings, and user ratings to guide your choice, your next meal is only a few clicks away!"</p>
      <div className='explore-menu-list'></div>
      {menu_list.map(()=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>

            </div>
        )
      })}
      <hr />
    </div>
    
  )
}

export default ExploreMenu
