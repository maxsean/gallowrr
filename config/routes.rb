Rails.application.routes.draw do

  post '/', to: 'sessions#create'
  delete '/', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :games, only: [:show, :create, :update]
    end
  end

  root 'static_pages#index'
  get '*path', to: 'static_pages#index'
end
