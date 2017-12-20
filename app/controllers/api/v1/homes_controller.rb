class Api::V1::HomesController < ApplicationController
skip_before_action :verify_authenticity_token

   def index
     state = (current_user.location)
     response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=camping+parks&location=#{state}",
     :headers => { "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",  'Content-Type' => 'application/json'})
     @camp_array = JSON.parse(response.body)
     @campgrounds_list = @camp_array['businesses']
     member = { session: user_signed_in?, campgrounds: @campgrounds_list[0..5]}
     render json: member
   end
end
