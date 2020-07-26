# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users 

  get '/api', to: 'api#index'

  scope '/api', defaults: { format: 'json' } do
    resources :tasks, only: [:index, :update, :create] 
    get '/searcher', to: 'tasks#searcher'
  end

  root 'application#fallback_index_html"'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
