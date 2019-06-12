Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :spot_searches, only: [ :show, :create, :update ] do
    # post 'spots/around', to: 'spots#around', as: :spots_around
    # post 'spots/destroy_cloud', to: 'spots#destroy_cloud', as: :destroy_cloud
    # post 'spots/update', to: 'spots#update', as: :spot_update
  end
  resources :spots, only: [ :create, :update ] do
    post 'around', on: :collection
    post 'destroy_cloud', on: :collection
  end
  resources :addresses, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
