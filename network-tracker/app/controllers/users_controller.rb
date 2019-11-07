class UsersController < ApiController
    before_action :authorize_request, except: :create

    def index
        users = User.all
  
        render json: {
            message: "ok",
            users: users
        }
    end 
    def user_params
        params.require(:user).permit( :username, :email, :password )
      end
end
