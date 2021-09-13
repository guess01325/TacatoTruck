import './MenuItemCreate.css'
import { useState } from 'react'
// import { Layout } from '../../components/Layout'
import { Redirect } from 'react-router-dom'
import { createMenuItem } from '../../services/menuItems'


function MenuItemCreate(props) {

  const [menuItem, setMenuItem] = useState({
    name: '',
    imgURL: '',
    price: '',
    ingredients: ''
  })

  const [isCreatedMenuItem, setCreatedMenuItem] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMenuItem({
      ...menuItem,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const createdItem = await createMenuItem(menuItem)
    setCreatedMenuItem({ createdItem })
  }

  if (isCreatedMenuItem) {
    return <Redirect to={`/menu`} />
  }


  return (
    <>
      <h1>Create A Taco</h1>
      {/* <Layout user={props.user}> */}
      <form className="createItem-form" onSubmit={handleSubmit}>
        <input
          className='create-name'
          placeholder='Name'
          required
          name='name'
          value={menuItem.name}
          onChange={handleChange}
        />
        <input
          className="create-price"
          placeholder='Price'
          required
          value={menuItem.price}
          name='price'
          onChange={handleChange}
        />
        <textarea
          className='create-ingredients'
          placeholder='Ingredients'
          required
          value={menuItem.ingredients}
          name='ingredients'
          onChange={handleChange}
        />
        <input
          className="create-link"
          placeholder="Link"
          required
          value={menuItem.imgURL}
          name='link'
          onChange={handleChange}
        />
        <button type="submit" className="create-submit-button">Submit</button>
      </form>

      {/* </Layout> */}
    </>
  )
}

export default MenuItemCreate