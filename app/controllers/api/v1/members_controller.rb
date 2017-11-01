class Api::V1::MembersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!

  def index
    member = { signed_in: user_signed_in?, id: current_user.id}
    if user_signed_in?
      render json: member
    end
  end

end
