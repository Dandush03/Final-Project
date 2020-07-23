# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users 

  scope '/api', defaults: { format: 'json' } do
    root 'api#index'
    resources :tasks, only: [:index] 
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
