

import classNames from "classnames/bind"
import styles from "./header.module.scss"

const cx = classNames.bind(styles)
const Header = () => {
    return (
        <div className={cx('container')}>
            <div className="container">
                <div className={cx('box')}>
                    <h1>Header</h1>
                </div>
            </div>
        </div>
    )
}

export default Header