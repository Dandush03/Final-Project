class ApiController < ActionController::API
  respond_to :html, :json

  before_action :authenticate_user!

  def index
    user = user_loging_status
    respond_with do |format|
      format.html { redirect_to root_path }
      format.json { render json: user }
    end
  end

  protected

  def user_loging_status
    if user_signed_in?
      user_name = current_user.full_name.to_s
      user_json = { login: true, name: user_name }
    else
      user_json = { login: false }
    end
    user_json
  end
end
