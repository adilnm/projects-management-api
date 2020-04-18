class ProjectsController < ApplicationController
    def index
        projects=Project.all
        
        render json: projects.to_json(:include => :user)
    end

    def create
        project=Project.new(projects_params)
        if project.save
            render json:project.to_json(:include => :user)
        else
            render json:{error:'error'}
        end
    end

    def projects_params
        params.require(:project).permit(:title, :content, :user_id)
    end
end
