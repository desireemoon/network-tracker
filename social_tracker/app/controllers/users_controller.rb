class UsersController < ApiController
    before_action :authorize_request, except: :create

    def index
        @users = User.all
        render json: @users, status: :ok 
    end 

    def show
        begin
            @users = User.find(params[:id])
            render json: @users, status: :ok
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "User not found with that ID"
            }, status: 404
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end 

    def user_params
        params.require(:user).permit( :username, :email, :password )
      end
end
