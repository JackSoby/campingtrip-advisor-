require "rails_helper"


jack = User.create(first_name: 'Jack', last_name: 'Sobocinski', email:'sobojack@gmail.com', location: 'windham',)

RSpec.describe User do
    it "has a first_name, last_name, email and location." do
  expect(jack.first_name).to include("Jack")
  expect(jack.last_name).to include("Sobocinski")
  expect(jack.email).to include("sobojack@gmail.com")
  expect(jack.location).to include("windham")
  end
end
