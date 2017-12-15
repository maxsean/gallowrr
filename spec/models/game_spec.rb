require 'rails_helper'

RSpec.describe Game, type: :model do
  it {should belong_to(:user)}

  it {should belong_to(:word)}

  it {should have_valid(:incorrect).when(1)}

  it {should_not have_valid(:incorrect).when(nil, 'string')}
end
