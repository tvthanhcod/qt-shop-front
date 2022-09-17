
import classNames from "classnames/bind"
import styles from "./shoppage.module.scss"

const cx = classNames.bind(styles)

const ShopPage = () => {
    return (
        <div className={cx('container')}>
            <h1>Shop Page</h1>
        </div>
    )
}

export default ShopPage