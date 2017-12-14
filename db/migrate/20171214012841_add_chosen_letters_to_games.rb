class AddChosenLettersToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :chosen_letters, :text, array: true, default: []
  end
end
