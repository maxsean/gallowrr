require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'words.csv'))

csv = CSV.parse(csv_text, :encoding => 'ISO-8859-1')

csv.each do |row|
  Word.create!(body: "#{row[0].chomp}")
end
