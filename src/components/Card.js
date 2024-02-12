/*
In short, a card in React is a reusable UI component used to display information or content in a visually 
appealing and organized manner. It typically consists of HTML elements styled with CSS to create a distinct 
container, often containing text, images, buttons, or other interactive elements. Cards are commonly used in web 
development to present various types of content such as product details, user profiles, articles, and more.

//here we bring some css into a duplicate wrapeer component
 */

import './Card.css'
function Card(props) {
    const classes = 'card '+ props.className;
    return <div className={classes}>{props.children}</div>
}


export default Card;