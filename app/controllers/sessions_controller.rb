class SessionsController < ApplicationController
    def logged_in_user
        if logged_in?
            render json:{logged_in: true, user:current_user}
        else
            render json:{login:false}
        end
    end

    def create
        user=User.find_by(username:session_params[:username])
        if user && user.authenticate(params[:user][:password])
            session[:user_id]=user.id
            byebug
            render json: {logged_in: true, user:user}
        else
            render json: {logged_in: false, errors:"You have entered an invalid username and/or password"}
        end
    end

    def destroy
        reset_session
    end

    private

    def session_params
        params.require(:user).permit(:username, :email, :password)
    end
end
