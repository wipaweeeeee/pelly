export const PriceList = (scoop) => {
	let price;

	switch (scoop) {
  		case 2:
  			price = "3.00"
  			break;
  		case 3:
  			price = "4.00"
  			break;
  		case 4:
  			price = "6.00"
  			break;
  		case 5: 
  			price = "8.00"
  			break;
  	}

  	return price;
}

export const ItemTypes = {
  SCOOP: 'scoop',
}