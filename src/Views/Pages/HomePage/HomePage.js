

import classNames from "classnames/bind"
import { SlideContent } from "../../../Components"
import styles from "./homepage.module.scss"
import  Card  from "../../../Components/card/Card"
import  Blog  from "../../../Components/blog/blog"


const cx = classNames.bind(styles)
const HomePage = () => {

    return (
        <div className={cx('container')}>
            <SlideContent />
            <h1>Home Page</h1>
            <Card />
            <Blog />
        </div>
    )
}

export default HomePage