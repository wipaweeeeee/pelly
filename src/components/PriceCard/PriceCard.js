import React, { useState, useEffect } from 'react'; 
import classNames from 'classnames';
import styles from './PriceCard.module.scss';
import { PriceList } from './../helper.js';

const PriceCard = (props) => {

	const [ open, setOpen ] = useState();
	const [ openCard, setOpenCard ] = useState();

	let slots = [];
	let price;

	for (var i = 0; i < props.scoops; i++) {
		slots.push(<div key={i} className={styles.priceCardSlot}>{i + 1}</div>)
		price = PriceList(i + 1);
	}

	let scoopImages = [];
	let scoopSlot = [];
	for ( var i = 0; i < props.flavor.length; i++ ) {
		scoopImages.push(
			<img key={i} className={styles.priceCardScoopImage} src={props.flavor[i].image}/>
		)

		scoopSlot.push(
			<img key={i} className={styles.priceCardSlot} src={props.flavor[i].image}/>
		)
	}

	useEffect(() => {
		if( props.flavor.length > 0 ) setOpen(true);

		const timer = setTimeout(() => {
			setOpenCard(false);
		}, 1000);

		return (() => {
			clearTimeout(timer);
			setOpenCard(true);
		});

	}, [props.flavor])

	return (
		<div 
			className={classNames(
				styles.priceCardContainer,
				open ? styles.priceCardOpen : null)}
			onClick={() => setOpen(!open)}
			
		>

			{open && 
				<div className={styles.priceCardOpenContainer}>
					{	props.flavor.length > 0 && openCard &&
						<div>
							<p>Added a scoop of</p>
							<h1>{props.flavor[props.flavor.length - 1].name}!</h1>
							<div className={styles.priceCardImageContainer}>
								{scoopImages}
							</div>
						</div>
					}
					<div className={styles.priceCardSlotContainer}>
						{props.flavor && 
							<div className={styles.priceCardSlotScoop}>
								{scoopSlot}
							</div>
						}
						{slots}
						{props.scoops < 5 && 
							<div 
								className={styles.priceCardAdd}
								onClick={(e) => props.handleAdd(e)}
							>+
							</div>
						}
					</div>
				</div>
			}

			<div className={styles.priceCardPrice}>
				<h4>Your Sundae</h4>
				<span className={styles.price}>${price}</span>
			</div>
		</div>
	)
}

export default PriceCard;