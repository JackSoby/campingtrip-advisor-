require 'rails_helper'

RSpec.describe Api::V1::ShowPagesController, type: :controller do
  let!(:campground1) {Campground.create(name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park')}
  let!(:user1) {User.create(first_name: 'Gandalf', last_name: "TheWhite", location:'NH', email: 'gandalf@thewhite.com')}
  let!(:note1) {Note.create(user: user1, campground: campground1, text:'awesome test note')}

  describe "POST#create" do


    before do
      get :create, params: { _json: "pawtuckaway-state-park" }
    end

    it "should create return a array of notes" do
      expect(response.status).to eq 200
    end
  end
end
