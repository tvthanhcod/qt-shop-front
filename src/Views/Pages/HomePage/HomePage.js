

import classNames from "classnames/bind"
import { SlideContent } from "../../../Components"
import styles from "./homepage.module.scss"

const cx = classNames.bind(styles)
const HomePage = () => {

    return (
        <div className={cx('container')}>
            <SlideContent />
        </div>
    )
}

export default HomePage