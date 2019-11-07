class UsersController < ApiController
    before_action :authorize_request, except: :create

    def index
        @users = User.all
        render json: @users, status: :ok 
    end 
    
    def show
        @users = User.find(params[:id])
        render json: @users, status: :ok
    end 

    def user_params
        params.require(:user).permit( :username, :email, :password )
      end
end
