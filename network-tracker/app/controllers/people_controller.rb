class PeopleController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        people = Person.all
  
        render json: {
            message: "ok",
            people: people
        }
    end 
end
