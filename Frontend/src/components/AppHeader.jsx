import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/icons/bigvu-logo.svg'

export const AppHeader = () => {
    return (
        <header className="content">
            <nav className="appHeader-nav-color" >
                <div className="appHeader-nav flex justify-between">

                    <div className="logo-holder flex auto-center">
                        <Link to="/" >
                            <div className="logo"><Logo /></div>
                        </Link>
                    </div>

                    <div className="btn-holder flex auto-center">
                        <button className="btn1">☰</button>
                    </div>

                </div>
            </nav>
        </header>
    )
}




