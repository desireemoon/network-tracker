class PeopleController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        @people = Person.all
        render json: @people, status: :ok 
    end 
    def show
        begin
            @person = Person.find(params[:id])
            render json: @people, status: :ok 
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "Person not found with that ID"
            }, status: 404
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end 

    def create 
        puts 'creating Person'
        puts params
          person =  Person.new(person_params)
        puts "??", person
          if person.save 
              render json: {
                  message: "ok",
                  person: person
              }
          else 
              render json: {
                  message: person.errors
              }, status: 500
          end
      end

      private 
  
    def set_person 
        @person = Person.find(params[:id])
    end
  
    def person_params
      params.permit(:name, :picture, :relation, :virtual_interaction, :irl_interaction, :phone, :email, :address, :notes)
    end
end
