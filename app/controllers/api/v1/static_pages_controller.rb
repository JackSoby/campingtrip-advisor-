class Api::V1::StaticPagesController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
     state = (params[:name])
     response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=campgrounds&location=#{state}",
     :headers => { "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",  'Content-Type' => 'application/json'})
     @camp_array = JSON.parse(response.body)
     @campgrounds_list = @camp_array['businesses']
     render json: @campgrounds_list
   end
end
