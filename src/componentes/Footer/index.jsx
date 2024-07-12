import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
    <a href='https://github.com/Nahi05'> 
        <img src="./img/github.png" alt="Github"/>
    </a>
    <a href='https://drive.google.com/file/d/1XiD7pixwYXXd2YrxUcOQzHPHKeZQ27UX/view'> 
        <img src="/img/icons8-cv-25.png" alt="cv" />
    </a>
    <a href='https://www.linkedin.com/in/nahiara-delgado-107301271/'> 
        <img src="/img/linkedin.png" alt="linkedIn" />
    </a>
    </div>
    <img src='./img/Logo (4).png' alt='org' /> 
    <strong>Desarrollado por Delgado Nahiara. Un proyecto de Alura</strong>
</footer>
}

export default Footer