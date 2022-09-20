

import classNames from "classnames/bind"
import styles from "./homepage.module.scss"
import  Card  from "../../../Components/card/Card"
import  Blog  from "../../../Components/blog/blog"


const cx = classNames.bind(styles)
const HomePage = () => {

    return (
        <div className={cx('container')}>
            <h1>Home Page</h1>
            <Card />
            <Blog />

        </div>
    )
}

export default HomePage