import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

import styles from "./AccountItem.module.scss"
const cx = classNames.bind(styles)
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src = "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/f205e04470540d4e05921b562a617474~c5_100x100.jpeg?x-expires=1693818000&x-signature=Zo99fE4xqMpzJuSUV3PsUhlMGQU%3D" alt = "A"></img>
        <div className={cx("info")}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;
