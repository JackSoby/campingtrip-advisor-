class Api::V1::CampsController < ApplicationController
  skip_before_action :verify_authenticity_token

        def create
           camp_test = Campground.where(name: params[:name])
          if camp_test.empty?
          new_camp = Campground.create(lat: params[:lat], lng: params[:lng],name: params[:name], address: params[:address], rating: params[:rating], country: params[:country], state: params[:state], city: params[:city], zip: params[:zip], phone: params[:phone], yelp_id: params[:id])
          if new_camp.save
             test_fav = Favorite.create(user: current_user, campground: new_camp)
            message = 'Campsite saved'
            render json: { message: message }
          else
            message = 'Error campsite not able to be saved'
            render json: { message: message }
          end
        else
          test_favorite =Favorite.where(user: current_user, campground: camp_test[0])
            if test_favorite.empty?
          test_fav = Favorite.create(user: current_user, campground: camp_test[0])
          message = 'Campsite saved'
         render json: { message: message }
       else
         message = 'You already saved this Campsite'
        render json: { message: message }
      end
    end
  end
end
