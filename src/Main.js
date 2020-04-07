import React, { useState, useContext } from 'react';
import SizeCard from './components/SizeCard/SizeCard';
import PriceCard from './components/PriceCard/PriceCard';
import FlavorCard from './components/FlavorCard/FlavorCard';
import ModalCard from './components/ModalCard/ModalCard';
import data from './csvjson.json';
import styles from './Main.module.scss';
import { DndProvider } from 'react-dnd'
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import Header from './components/Header/Header';


const Main = () => {
	let initialHeader = {
		next: "flavors", 
		ctaBack: "/", 
		back: "menu", 
		ctaNext: "/main"
	}

	const [ scoop, setScoop ] = useState(2);
	const [ intro, setIntro ] = useState(true);
	const [ flavor, setFlavor ] = useState([]);
	const [ selected, setSelected ] = useState();
	const [ add, setAdd ] = useState(false);
	const [ header, setHeader ] = useState(initialHeader);
	const [ open, setOpen ] = useState();
	const [ modal, setModal ] = useState();

	const handleScoop = (e, numScoop) => {
		e.stopPropagation();
		setScoop(numScoop);
		setIntro(false);
		setHeader({
			next: "toppings", 
			ctaBack: "/main", 
			back: "sizes", 
			ctaNext: "/main"
		})
		setOpen(true);
	}

	const handleFlavor = (name, image, index) => {
		setFlavor(flavor => [...flavor, {name: name, image: image}]);
		setSelected(index);
		setAdd(!add);
	}

	const handleDrop = (item) => {
		setFlavor(flavor => [...flavor, {name: item.name, image: item.image}]);
		setAdd(!add);
	}

	const handleRemove = (value) => {
		setFlavor(flavor => flavor.filter(item => item !== value))
	}

	const handleNext = () => {
		setIntro(false);
		setHeader({
			next: "toppings", 
			ctaBack: "/main", 
			back: "sizes", 
			ctaNext: "/main"
		})
	}

	const handleBack = () => {
		setIntro(true);
		setHeader({
			next: "flavors", 
			ctaBack: "/", 
			back: "menu", 
			ctaNext: "/main"
		})
	}

	const handleModal = (e) => {
		setModal(true);
		// handleScoop(e, scoop + 1)
	}

	const Intro = () => {
		return (
			<React.Fragment>
				<h1>Choose a size.</h1>
				<SizeCard 
					count={2}
					onClick={(e) => handleScoop(e, 2)}
				/>
				<SizeCard 
					count={3}
					onClick={(e) => handleScoop(e, 3)}
				/>
				<SizeCard 
					count={4}
					onClick={(e) => handleScoop(e, 4)}
				/>
				<SizeCard 
					count={5}
					onClick={(e) => handleScoop(e, 5)}
				/>
			</React.Fragment>
		)
	}

	function getFlavors (cat) { 
		let flavors = [];
		data.map((item, index) => {
			if ( item.CATEGORIES.indexOf(cat) > -1) {
				flavors.push(
					<FlavorCard 
						key={index}
						content={item.FLAVOR} 
						image={item.image}
						handleAdd={() => handleFlavor(item.FLAVOR, item.image, index)}
						id={index}
						selected={selected}
					/>
				);
			}
		})

		return flavors
	}

	const Selection = () => {
		//to get clean categories
		let flavorname = [];
		let categories = [];

		data.map((item, index) => {
			flavorname.push(item.CATEGORIES.split(','))
		})

		for (var i = 0; i < flavorname.length; i++) {
			for (var j = 0; j < flavorname[i].length; j++) {
				categories.push(flavorname[i][j].trim());
			}
		}
		categories = Array.from(new Set(categories));

		//map selection
		let selections = categories.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<h4>{item}</h4>
					<div className={styles.selections}>{getFlavors(item)}</div>
				</React.Fragment>
			)
		})

		return (
			<div className={styles.selectionContainer}>
				<h1>Select your flavors.</h1>
				{selections}
			</div>
		)
	}

	const GeneratePreview = () => {
	  const {style, item} = useContext(Preview.Context);
	  return <div style={{...style}}><FlavorCard content={item.name} image={item.image}/></div>;
	};

	return (
		<DndProvider backend={MultiBackend} options={HTML5toTouch}>
		{modal && <ModalCard />}
			{modal && <div className="overlay" />}
			<Header 
				ctaBack={header.ctaBack}
				ctaNext={header.ctaNext}
				back={header.back}
				next={header.next}
				onClickNext={() => handleNext()}
				onClickBack={() => handleBack()}
			/>
			<div className="container">
				{intro ? <Intro /> : <Selection />}
				<PriceCard 
					scoops={scoop} 
					handleAdd={(e) => handleModal(e)}
					flavor={flavor}
					onDrop={(item) => handleDrop(item)}
					handleRemove={(index) => handleRemove(index)}
					add={add}
					open={open}
				/>
			</div>
			<Preview>
		    	<GeneratePreview />
		    </Preview>
		</DndProvider>
	)
}

export default Main;