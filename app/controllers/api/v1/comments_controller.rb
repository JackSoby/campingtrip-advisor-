class Api::V1::CommentsController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
      camp= Campground.find(params[:_json])
      note = camp.notes.where(user: current_user)

      render json: note
   end
end
