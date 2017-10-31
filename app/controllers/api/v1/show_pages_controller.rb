class Api::V1::ShowPagesController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
     camp_id= (params[:_json])
     response = HTTParty.get("https://api.yelp.com/v3/businesses/#{camp_id}",
     :headers => { "Authorization" => "Bearer #{ENV["YELP_API_KEY"]}",  'Content-Type' => 'application/json'})
     @camp_hash = JSON.parse(response.body)
     render json: @camp_hash
   end
end
