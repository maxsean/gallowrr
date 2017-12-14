class Game < ApplicationRecord
  belongs_to :user
  belongs_to :word

  validates :incorrect, presence: true
end
