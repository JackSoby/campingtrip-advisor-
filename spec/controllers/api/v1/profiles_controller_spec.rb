require 'rails_helper'

RSpec.describe Api::V1::ProfilesController, type: :controller do
  let!(:campground1) {Campground.create(name: "Pawtuckaway State park", address:"7 Pawtuckaway Rd", rating:'4', country:'merica', state: 'NH', city:'Nottingham', zip: "0000", phone: '123-345-67', yelp_id:'pawtuckaway-state-park')}
  let!(:user1) {User.create(first_name: 'Gandalf', last_name: "TheWhite", location:'NH', email: 'gandalf@thewhite.com')}
  let!(:note1) {Note.create(user: user1, campground: campground1, text:'awesome test note')}

  describe "GET#index" do


    before do
      get :index
    end

    it "should create return a array of notes" do
      expect(response.status).to eq 302
    end


  end
end
