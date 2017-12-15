class Api::V1::UsersController < Api::V1::ApiController

  def index
    # returns signed in user, otherwise a fake user that will fail conditionals set up in the React components
    if current_user
      render json: { user: current_user }
    else
      render json: { user: {id: false} }
    end
  end

  def create
    # create new user. need to refactor password confirmation
    body = JSON.parse(request.body.read)
    user = User.new(body)
    # user.password = params[:password]
    # user.password_confirmation = params[:password_confirmation]
    if user.save
      messages = {registration: ["successful, please login. Verification process coming soon"]}
      render json: {messages: messages}, status: :created
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  def show
    games = Game.where(user_id: params["id"]).order('created_at DESC').to_json(include: :word) #include associated word with game

    # consider refactoring to do less ActiveRecord Queries
    games_active = current_user.games.where(outcome: "active").count
    games_won = current_user.games.where(outcome: "success").count
    games_lost = current_user.games.where(outcome: "failure").count

    render json: { games: games, games_active: games_active, games_won: games_won, games_lost: games_lost }
  end

end
