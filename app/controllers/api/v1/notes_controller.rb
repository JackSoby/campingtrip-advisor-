class Api::V1::NotesController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
      camp= Campground.find(params[:id])
      note= Note.create(text: params[:text], user: current_user, campground: camp)
      render json: note
   end

   def destroy
     Note.where(text: params[:text]).destroy_all
     camp= Campground.find(params[:id])
     note = camp.notes.where(user: current_user)
     render json: note
   end

   def update
     update_note = Note.find(params[:note_id])
     update_note.update(text: params[:note_text])
     camp= Campground.find(params[:id])
     note = camp.notes.where(user: current_user)
     render json: note
   end
end
