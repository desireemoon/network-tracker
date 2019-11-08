class NetworksController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        @networks = Network.all
        render json: @networks, include: :people, status: :ok 
    end 
    def show
        begin
            @networks = Network.find(params[:id])
            render json: @networks, include: :people, status: :ok 
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "Network not found with that ID"
            }, status: 404
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end 
end
