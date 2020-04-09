import React, { useState, useEffect, useCallback } from 'react'; 
import classNames from 'classnames';
import styles from './PriceCard.module.scss';
import { PriceList } from './../helper.js';
import Swipe from 'react-easy-swipe';
import { useDrop } from 'react-dnd';

const PriceCard = ( props ) => {

	const [ openCard, setOpenCard ] = useState();
	const [ openSwipe, setOpenSwipe ] = useState();

	let slots = [];
	let slotSwipe = [];
	let price;

	//DnD
	const [ collectedProps, drop ] = useDrop({
		accept: 'scoop',
		drop: item => {
			props.onDrop(item)
		},
		collect: monitor => {
			return {
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}
		}
	})

	const isOver = collectedProps.isOver;
	const canDrop = collectedProps.canDrop;

	for (var i = 0; i < props.scoops; i++) {
		slots.push(
			<div 
				key={i} 
				className={classNames(
					styles.priceCardSlot,
					isOver && canDrop & props.flavor.length === i ? styles.priceCardDrop : null
				)}
			>
				{i + 1}
			</div>)
		slotSwipe.push(
			<div key={i} className={styles.priceCardSlotSwipe}>
				<h4>{i + 1} Scoop</h4>
			</div>
		)
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

	let swipeImage = props.flavor.map((item, index) => {
		return (
			<div 
				className={styles.priceCardSwipe} 
				key={index}
				onClick={() => props.handleRemove(item)}
			>
				<img src={item.image} />
				<span>{item.name}</span>
				<div className={styles.priceCardClose}>x</div>
			</div>
		)
	})

	useEffect(() => {

		const timer = setTimeout(() => {
			setOpenCard(false);
		}, 2000);

		return (() => {
			clearTimeout(timer);
			setOpenCard(true);
		});

	}, [props.add])

	return (
		<Swipe
			onSwipeUp={() => setOpenSwipe(true)}
			onSwipeDown={() => setOpenSwipe(false)}
		>
			<div 
				className={classNames(
					styles.priceCardContainer,
					props.open ? styles.priceCardOpen : null)}
				ref={drop}
			>

				{props.open && 
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
						{ !openSwipe && 
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
						}
					</div>
				}

				{ openSwipe && 
					<div>
						<div className={styles.priceCardImageContainer}>
							{scoopImages}
						</div>
						{swipeImage}
						{slotSwipe}
						{props.scoops < 5 && 
							<div 
								className={classNames(styles.priceCardAdd, styles.priceCardAddSwipe)}
								onClick={(e) => props.handleAdd(e)}
							>+ Add a Scoop
							</div>
						}
					</div>

				}

				<div className={styles.priceCardPrice}>
					<h4>Your Sundae</h4>
					<span className={styles.price}>${price}</span>
				</div>
			</div>
		</Swipe>
	)
}

export default PriceCard;