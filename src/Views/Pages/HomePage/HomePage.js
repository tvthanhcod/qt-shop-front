

import classNames from "classnames/bind"
import styles from "./homepage.module.scss"

const cx = classNames.bind(styles)
const HomePage = () => {

    return (
        <div className={cx('container')}>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage