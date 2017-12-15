class Api::V1::GamesController < Api::V1::ApiController

  def show
    game = Game.find(params["id"]).to_json(include: :word)

    render json: game
  end

  def create
    body = JSON.parse(request.body.read)
    binding.pry
    game = Game.new(body)
    #set randome word as game word, database has unique so if it doesn't save, get another (until loop)

    #return list of games to user?
  end

  def update
    body = JSON.parse(request.body.read)

    game = Game.find(params["id"])

    game.update(chosen_letters: body["chosen_letters"], incorrect: body["incorrect"], outcome: body["outcome"])

    render json: game
  end

end
