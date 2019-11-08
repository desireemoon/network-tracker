class PeopleController < ApiController
    before_action :authorize_request, except: %i[index show]
    def index
        @people = Person.all
        render json: @people, status: :ok 
    end 
    def show
        begin
            @people = Person.find(params[:id])
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
          teacher =  Teacher.new(teacher_params)
        puts "??", teacher
          if teacher.save 
              render json: {
                  message: "ok",
                  teacher: teacher
              }
          else 
              render json: {
                  message: teacher.errors
              }, status: 500
          end
      end

      private 
  
    def set_person 
        @person = Teacher.find(params[:id])
    end
  
    def person_params
      params.permit(:name, :photo)
    end
end
