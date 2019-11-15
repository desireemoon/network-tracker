class NetworksController < ApiController
    before_action :set_network, only: %i[show update destroy]
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
    
    def create 
        puts 'creating Network'
        puts params
          network =  Network.new(network_params)
        puts "??", network
          if network.save 
              render json: {
                  message: "ok",
                  network: network,
                  include: :people
              }
          else 
              render json: {
                  message: network.errors
              }, status: 500
          end
      end

      def update 
        if @network.update(network_params)
            render json: {
                message: "ok",
                network: @network,
                include: :people
            }
        else 
            render json: {
                message: @network.errors
            }, status: 500
        end
    end
  
    def destroy
        @network.destroy
        render json: {
            message: "ok"
        }
    end

      private 
    def set_network 
        @network = Network.find(params[:id])
    rescue ActiveRecord::RecordNotFound
        render json: { message: 'no network matches that ID' }, status: 404
    end
  
    def network_params
      params.require(:network).permit(:name, :type, :description, :user_id, :people)
    end
end
