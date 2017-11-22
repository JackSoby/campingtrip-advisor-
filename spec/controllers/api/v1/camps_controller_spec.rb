require 'rails_helper'

RSpec.describe Api::V1::CampsController, type: :controller do
  let!(:campground1) {Campground.create(name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park')}
  let!(:user1) {User.create(first_name: 'Gandalf', last_name: "TheWhite", location:'NH', email: 'gandalf@thewhite.com')}

  describe "POST#create" do


    before do
      get :create, params: { name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park' }
    end


    it "should create return a message Campsite saved if campsite saved" do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(returned_json).to eq "message" => "Campsite saved"
    end


  end
end
