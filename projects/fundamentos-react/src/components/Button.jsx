const Button = ({ text }) => {
    const handeClickButton = (title) => { 
        console.log('hande click ' +title);
     }
    return <button onClick={() => { handeClickButton(text) }}>{text}</button>

}

export default Button