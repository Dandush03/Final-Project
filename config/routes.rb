# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  get '/api', to: 'api#index'

  scope '/api', defaults: { format: 'json' } do
    resources :tasks, only: %i[index update create]
    get '/searcher', to: 'tasks#searcher'
    get '/searcher/by_category_date', to: 'tasks#search_by_category'
  end

  root 'application#fallback_index_html"'

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
