Rails.application.routes.draw do
  resources :projects
  resources :users

  post 'sessions' => "sessions#create"
  delete 'logout' => "sessions#destroy"
  get 'currentuser' => "sessions#logged_in_user"
  get 'myprojects' => "projects#my_projects"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
