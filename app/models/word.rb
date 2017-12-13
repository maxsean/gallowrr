class Word < ApplicationRecord
  has_many :games
  has_many :users, through: :games

  validates :body, presence: true
end
