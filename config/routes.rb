Rails.application.routes.draw do
   devise_for :users
   root 'static_pages#index'
  namespace :api do
      namespace :v1 do
        resources :static_pages, only: [:index, :create]
         resources :members, only: [:index]
      end
    end
    get '*path', to: 'static_pages#index'
  end
