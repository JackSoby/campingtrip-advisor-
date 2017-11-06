require "rails_helper"

campground = Campground.create(name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park')
user= User.create(first_name: 'Jack', last_name: 'Sobocinski', email:'sobojack@gmail.com', location: 'windham')
note= Note.create(text:'Hello, world!', user: user, campground: campground)




RSpec.describe Note do
  it "a note takes a user and a campground" do
    expect(note.user.first_name).to include("Jack")
    expect(note.text).to include("Hello, world!")
    expect(note.user.last_name).to include("Sobocinski")
    expect(note.campground.name).to include("Pawtuckaway State park")
    expect(note.campground.address).to include("7 Pawtuckaway Rd")
  end
end
