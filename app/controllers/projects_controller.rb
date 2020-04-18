class ProjectsController < ApplicationController
    def index
        projects=Project.all
        
        render json: projects.to_json(:include => :user)
    end
end
