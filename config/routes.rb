Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/designhome', to: 'pages#designhome'
  resources :spot_searches, only: [ :show, :create ]
  resources :spots, only: [ :create, :update ]
  resources :addresses, only: [:create ]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
