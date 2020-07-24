# frozen_string_literal: true

class ApiController < ActionController::API
  before_action :authenticate_user!

  respond_to :json

  def index
    if user_signed_in?
      test = current_user.inspect
      user_name = current_user.full_name.to_s
      render json: {login: true, user: user_name}
    else 
      render json: {login: false}
    end
      
  end
end
