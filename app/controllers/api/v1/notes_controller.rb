class Api::V1::NotesController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
      camp= Campground.find(params[:id])
      note= Note.create(text: params[:text], user: current_user, campground: camp)
      render json: note
   end
end
