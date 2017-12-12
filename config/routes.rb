Rails.application.routes.draw do

  post '/', to: 'sessions#create'
  delete '/', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  root 'static_pages#index'
  get '*path', to: 'static_pages#index'
end
