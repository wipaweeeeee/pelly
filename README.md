# Scoops App
View the prototype live [here](https://wipaweeeeee.github.io/pelly/)

To run locally:
- clone the repo
- `npm i` 
- `npm run start` 

The prototype is made using the React framework. The reason I chose React is because it allows for fast development that can scale. React is one of the most popular framework for front-end development to date and with that comes a large community of users so there are a lot of libraries, resources and forums to rely on. The prototype works best on mobile device, specifically iPhoneX.

# Documentation
The project is consists of many building blocks. Below is a break down of what was built.

## Component List
Main components include: 
- Top navigation
- Flavor Card
- Menu Card
- Modal Card
- Price Card 
- Size Card 

## Interaction Pattern
Main interactions include: 
- Swipe (up/down/side)
- Drag & drop
- Pop-up Modal
- Swipe-up Modal
- Top Navigation

## Animation List
Main animations include: 
- The load animation is made with [Lottie](https://airbnb.design/lottie/)
- Basic css animation

## Data Structure
Scoop flavors were exported from provided Google sheets as .csv,
which then get turned into [JSON file](https://github.com/wipaweeeeee/pelly/blob/master/src/csvjson.json)
The app then takes the JSON file as source of data. Price data was also made into helper function to prevent redundant code.

## Main Logic
Main logic include: 
- Multiple ways to add/remove scoop
- Allocate appropriate slots 
- Dynamic Price
- Programmatically add scoop to the scoop image
- Top navigation with some condition (pop-up modal) 

## Known Bugs and Potential Solutions
Due to limited time, bugs that don't cause flaw on the main flow are left unresolved. <br />
Below is a small list of known bugs and potential solutions. <br />
 
| Known Bug | Potential Solution |
|-----------|--------------------|
| Multiple scoops can be clicked at the same time | Create function that allows clicking out as deselect |
| There is no limit to how many scoops can be added | Add limit to slot count |
| Ability to move on with 0 scoop selected | Disable toppings navigation |
| Clicking back on Menu replays the load animation | Update app state |

Note: there are also known bugs in many edge cases and those are left unresolved as well but might not be documented here.

## Suggestions based on Learnings 
During the process of building this prototype, I discovered a number of improvements that can be made both to the workflow and to the design. Below are my suggestions:

| Current | Potential Improvement |
|-----------|--------------------|
| Google Sheets | Airtable provides very easy to use API so designers can update content/data as they like |
| Drawer height exceed viewheight | Disregard image |
| Narrow bottom padding on flavor list makes it difficult to swipe | Increase padding for ease of swipe |
| Tap twice to add scoop | Tap once to add, tap again to remove |

## Wishlist
Below are features that I would work on/complete had time permitted: 
- Check mark once scoop is added <br />
Note: I didn't have enough time to add this regardless of it being in the design but also realizing that it is completely blocked on mobile view so I left it out for now
- Page transition
- Delightful animations include
  - More elaborate scoop animation
  - Card slide up/down
