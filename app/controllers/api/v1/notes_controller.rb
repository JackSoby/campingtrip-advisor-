class Api::V1::NotesController < ApplicationController
skip_before_action :verify_authenticity_token

   def create
      note = Note.new(note_params)
      note.user = current_user
      if note.save
        render json: note
      else
        render json: 'note did not save'
      end
   end

   def destroy
     Note.where(text: params[:text]).destroy_all
     camp = Campground.find(params[:id])
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



  def note_params
     params.require(:note).permit(:text, :campground_id)
  end
end
