class Api::V1::GamesController < Api::V1::ApiController

  def show
    game = Game.find(params["id"]).to_json(include: :word)

    render json: game
  end

  def create
    game = Game.new(user_id: current_user.id, word: Word.order("RANDOM()").first)

    until game.save do
      game = Game.new(user_id: body, word: Word.order("RANDOM()").first)
    end

    games = Game.where(user_id: current_user.id).order('created_at DESC')

    render json: games
  end

  def update
    body = JSON.parse(request.body.read)

    game = Game.find(params["id"])

    game.update(chosen_letters: body["chosen_letters"], incorrect: body["incorrect"], outcome: body["outcome"])

    render json: game
  end

end
