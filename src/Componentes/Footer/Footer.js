import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/carlosavalenzuelag1'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/carlosavalenzuelag1'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/carlos-andr%C3%A9s-valenzuela-garc%C3%ADa-tic/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer