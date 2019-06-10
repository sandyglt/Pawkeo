Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'user_choice', to: 'pages#user_choice', as: :user_choice
  resources :spot_searches, only: [ :show, :create, :update ] do
    post 'spots/around', to: 'spots#around', as: :spots_around
    post 'spots/destroy_cloud', to: 'spots#destroy_cloud', as: :destroy_cloud
  end
  resources :spots, only: [ :create, :update ]
  resources :addresses, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
