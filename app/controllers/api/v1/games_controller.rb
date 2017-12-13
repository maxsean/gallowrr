class Api::V1::GamesController < Api::V1::ApiController

  def show
    game = Game.find(params["id"]).to_json(include: :word)

    render json: game
  end

  def create
    body = JSON.parse(request.body.read)
    game = Game.new(body)
    #set randome word as game word, database has unique so if it doesn't save, get another (until loop)

    #return list of games to user?
  end

end