class Api::V1::StaticPagesController < ApplicationController
skip_before_action :verify_authenticity_token
   def create
     state = (params[:name])
     response = HTTParty.get("https://api.yelp.com/v3/businesses/search?term=campgrounds&location=#{state}",
     :headers => { "Authorization" => "Bearer xABOrIYFA0EOp_EL9miyL5Fg-PPhq40RP-e5Ddl4jAXIOuun3v6aP3xwAya_lGYZaP1qGnqAW5ziINejcOz74KjjQMn9MJE7xWFTmb80GI1mT6HvxvU-o0YNG07rWXYx", 'Content-Type' => 'application/json'})
     @camp_array = JSON.parse(response.body)
     @campgrounds_list = @camp_array['businesses']
     render json: @campgrounds_list
   end
end
