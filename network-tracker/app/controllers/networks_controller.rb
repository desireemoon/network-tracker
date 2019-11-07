class NetworksController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        @networks = Network.all
  
        render json: @networks, include: :people, status: :ok 
    end 
end
