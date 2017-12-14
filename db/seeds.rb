require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'words.csv'))

csv = CSV.parse(csv_text, :encoding => 'ISO-8859-1')

csv.each do |row|
  Word.create!(body: "#{row[0].chomp}")
end

user1 = User.create!(handle: "testuser", email: "test@user.com", password: "123456", password_confirmation: "123456")

user2 = User.create!(handle: "fakeuser", email: "fake@user.com", password: "123456", password_confirmation: "123456")

game1 = Game.create!(user: user1, word_id: 2, incorrect: 0, complete: false, chosen_letters: [])

game2 = Game.create!(user: user1, word_id: 3, incorrect: 0, complete: false, chosen_letters: [])
