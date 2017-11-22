FactoryBot.define do
  factory :campground do
    sequence(:name) { |n| "Pawtuckaway State park" }
    sequence(:address) { |n| "7 Pawtuckaway Rd" }
    sequence(:rating) { |n| "4" }
    sequence(:country) { |n| "merica" }
    sequence(:state) { |n| "NH" }
    sequence(:zip) { |n| "0000" }
    sequence(:phone) { |n| "123-456-789" }
    sequence(:yelp_id) { |n| "pawtuckaway-state-park" }

  end
end
