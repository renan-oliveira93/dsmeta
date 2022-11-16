import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

export default function NotificationButton() {
    return (
        <div className='dsmeta-red-btn'>
            <img src={icon} alt='imagem de notiicação' />
        </div>
    )
}