require "rails_helper"

campground = Campground.create(name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park')

RSpec.describe Campground do
  it "has a name, address, rating, country, state, city, zip, phone and yelp_id" do
    expect(campground.name).to include("Pawtuckaway State park")
    expect(campground.address).to include("7 Pawtuckaway Rd")
    expect(campground.rating).to include("4")
    expect(campground.country).to include("merica")
    expect(campground.state).to include("NH")
    expect(campground.city).to include("Nottingham")
    expect(campground.zip).to include("0000")
    expect(campground.phone).to include("123-345-67")
    expect(campground.yelp_id).to include("pawtuckaway-state-park")
  end
end
