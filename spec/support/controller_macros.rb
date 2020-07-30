module ControllerMacros
  def login_user
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      FactoryBot.create_list(:user, 3)
      user = User.first
      sign_in user
    end
  end
end
