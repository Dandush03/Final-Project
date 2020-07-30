require 'rails_helper'

describe TasksController, type: :controller do
  login_user

  describe 'Task Controller' do
    before do
      Category.create!({ categories: 'test' })
      Task.create!({ name: 'test', category_id: 1, user_id: 1 })
    end

    context 'GET #index' do
      before do
        get :index
      end

      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'JSON body response contains a Task List' do
        json_response = JSON.parse(response.body)
        expect(json_response[0].keys).to match_array(
          %w[
            category_id
            created_at
            description
            end
            hours
            id
            minutes
            name
            seconds
            start
            updated_at
            user_id
          ]
        )
      end
    end

    context 'GET #searcher' do
      before do
        get :searcher
      end

      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'JSON body response contains a Task List' do
        json_response = JSON.parse(response.body)
        expect(json_response.keys).to match_array(
          %w[
            category_id
            created_at
            description
            end
            hours
            id
            minutes
            name
            seconds
            start
            updated_at
            user_id
          ]
        )
      end
    end

    context 'POST #create' do
      before do
        post :create, params: { tasks: { name: 'test', description: 'test description', category_id: 1 } }
      end

      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end
    end

    context 'PATCH #update' do
      before do
        time = Time.now
        time = time.to_i * 1000
        patch :update, params: { id: 1, task: { end: time } }
      end

      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end
    end

    context 'GET #search_by_category' do
      before do
        get :search_by_category, params: { start: '1', category_id: '1' }
      end

      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'JSON body response contains a Task List' do
        json_response = JSON.parse(response.body)
        expect(json_response[0].keys).to match_array(
          %w[
            category_id
            created_at
            description
            end
            hours
            id
            minutes
            name
            seconds
            start
            updated_at
            user_id
          ]
        )
      end
    end
  end
end
