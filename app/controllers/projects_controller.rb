class ProjectsController < ApplicationController
    include ActionView::Helpers::DateHelper

    def index
        projects=Project.all
        
        render json: projects , status: 200
    end

    def create
        project=Project.new(projects_params)
        if project.save
            render json:project.to_json(:include => :user)
        else
            render json:{error:'error'}
        end
    end

    def my_projects
        render json: current_user.projects
    end

    def projects_params
        params.require(:project).permit(:title, :content, :user_id)
    end
end
