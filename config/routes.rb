Rails.application.routes.draw do
   devise_for :users
   root 'static_pages#index'
  namespace :api do
      namespace :v1 do
        resources :static_pages, only: [:index, :create]
         resources :members, only: [:index]
          resources :show_pages, only: [:create]
          resources :camps, only: [:create]
          resources :profiles, only: [:index]
          resources :notes
          resources :comments, only: [:create]
          resources :homes, only: [:index]
      end
    end
    get '*path', to: 'static_pages#index'
  end
