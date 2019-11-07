class PeopleController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        @people = Person.all
        render json: @people, status: :ok 
    end 
    def show
        @people = Person.find(params[:id])
        render json: @people, status: :ok 
    end 
end
