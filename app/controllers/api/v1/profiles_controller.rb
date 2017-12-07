class Api::V1::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    member = { id: current_user.id, campgrounds: current_user.campgrounds, first_name: current_user.first_name, last_name: current_user.last_name}
    render json: member
  end
end
