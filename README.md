
# Campingtrip Advisor
This app helped me develop my skills for building a full stack web applications. I was able to dig into the Google maps API and the Yelp API. I got to see the MVC see model fully implemented.  

This app is to help campers find new camp grounds and keep track of old ones that they have been to. After a user signs in, they can search for a campground by location. When a user hits submit I am querying through the Yelp api to return a list of campgrounds based on the user's input. One of the biggest challenges I had to overcome was learning how to use the httparty gem to query through the Yelp api. If a user sees a campground they are interested in they view its show page. On the show page I am fetching only specific data about that one campground. I am also querying through the Google maps API to return that one campground on a map. One of the most challenging and rewarding parts of building this app was getting the Google maps API and the Yelp API to work together. A user can save a campground a view there own profile page. On this profile page they can see a list of all the campgrounds they have saved. They can leave notes on these campgrounds as well.


## Technologies
* React.js Front End with React Router to prevent page reloads
* Ruby on Rails back end with PostgreSQL database
* Yelp and Google Maps external APIs

## Setup
To get set up, clone this repository and run:
```
bundle
rake db:create
rake db:migrate
rails s
```

In a separate terminal window, run:
```
yarn install
./bin/webpack-dev-server
```

## Ideas
Potential ideas to implement in the future:
* Add Carrierwave and AWS cloud storage to upload profile photo
* Add date setter library
