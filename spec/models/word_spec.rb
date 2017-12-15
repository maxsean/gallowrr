require 'rails_helper'

RSpec.describe Word, type: :model do
  it {should have_many(:games)}

  it {should have_many(:users).through(:games)}

  it {should_not belong_to(:game)}

  it {should_not belong_to(:user)}

  it {should have_valid(:body).when('word')}
  it {should_not have_valid(:body).when(nil, '')}
end
