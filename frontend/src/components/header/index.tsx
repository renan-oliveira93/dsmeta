import logo from '../../assets/img/logo.svg';
import './styles.css';
export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logotipo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/renan-oliveira93"> Renan de Oliveira</a>
                </p>
            </div>
        </header>
    )
}