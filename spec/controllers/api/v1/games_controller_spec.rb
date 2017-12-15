require 'rails_helper'

RSpec.describe Api::V1::GamesController, type: :controller do
  let!(:first_user) {FactoryBot.create(:user)}
  let!(:first_word) {Word.create!(body: "test")}
  let!(:second_word) {Word.create!(body: "anothertest")}

  describe "GET#show" do
    it "should return game with its word associations when given game id" do
      first_game = Game.create!(user: first_user, word: first_word)

      get :show, params: {id: first_game.id}

      returned_json = JSON.parse(response.body)
      association_json = returned_json["word"]

      expect(response.status).to eq 200
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json["user_id"]).to eq first_user.id
      expect(returned_json["word_id"]).to eq first_word.id
      expect(returned_json["incorrect"]).to eq 0
      expect(returned_json["chosen_letters"]).to be_kind_of(Array)
      expect(returned_json["chosen_letters"].length).to eq 0
      expect(returned_json["outcome"]).to eq "active"

      expect(association_json["body"]).to eq first_word.body
    end

    describe "PATCH#update" do
      it "should update game and return game" do
        first_game = Game.create!(user: first_user, word: first_word)

        post_json = {
          chosen_letters: ["A"],
          incorrect: 1,
          outcome: "active"
        }.to_json

        patch :update, {params: {id: first_game.id}, body: post_json}

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(returned_json["id"]).to eq first_game.id

        post = JSON.parse(post_json)

        expect(returned_json["chosen_letters"]).to eq post["chosen_letters"]
        expect(returned_json["incorrect"]).to eq post["incorrect"]
        expect(returned_json["outcome"]).to eq post["outcome"]

      end
    end
  end

end
