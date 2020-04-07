import React from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
	return (
		<div className={styles.headerContainer}>
			<Link to={props.ctaBack} onClick={props.onClickBack}>‹ {props.back}</Link>
			<Link to={props.ctaNext} onClick={props.onClickNext}>{props.next} → </Link>
		</div>
	)
}

export default Header;