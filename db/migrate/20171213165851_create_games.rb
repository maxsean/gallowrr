class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.belongs_to :user
      t.belongs_to :word
      t.integer :incorrect, default: 0, null: false
      t.boolean :complete, default: false, null: false

      t.timestamps
    end
    add_index :games, [:user_id, :word_id], unique: true
  end
end
