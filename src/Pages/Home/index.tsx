import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import user from '../../assets/User.svg';
import key from '../../assets/key.svg';

export function Home() {
    return (
        <div className={ styles.container }>
            <form action="">
                <img src="https://picsum.photos/id/1028/200" alt="" />

                <h1>LOGIN</h1>

                <div className={ styles.inputForm }>
                    <img src={ user } alt="Login" />
                    <input type="email" placeholder="Digite seu usuário"/>
                </div>

                <div className={ styles.inputForm }>
                    <img src={ key } alt="Login" />
                    <input type="password" placeholder="Digite sua senha"/>
                </div>

                <div className={ styles.inputForm }>
                    <a href="/">ENTRAR</a>
                </div>
                
                <p>NÂO TEM CADASTRO?</p>                
            </form>
        </div>
    );
}